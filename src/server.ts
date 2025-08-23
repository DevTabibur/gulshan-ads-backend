import { Server } from "http";

import app from "./app";
import config from "./config";
import { errorlogger, logger } from "./shared/logger";
const PORT = config.port || 5000;

let server: Server | null = null;

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  errorlogger.error(error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (error) => {
  errorlogger.error(error);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// Handle SIGTERM signal for graceful shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM is received");
  if (server) {
    server.close(() => {
      process.exit(0); // Exit with zero exit code indicating graceful shutdown
    });
  }
});

const startServer = async (): Promise<void> => {
  try {
    server = app.listen(PORT, () => {
      logger.info(`🌐 Server started on port ${PORT} 🌐`);
    });
  } catch (error: any) {
    errorlogger.error("Server Error", error?.message);
  }
};

startServer();
