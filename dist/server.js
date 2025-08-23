"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const logger_1 = require("./shared/logger");
const PORT = config_1.default.port || 5000;
let server;
// !if an uncaught exception occurs, it logs the error & exit with a non-zero exit code
process.on("uncaughtException", (error) => {
  logger_1.errorlogger.error(error);
  process.exit(1);
});
const startServer = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      app_1.default.listen(PORT, () => {
        // console.log(`🌐 Server started on port ${PORT}`);
        logger_1.logger.info(`🌐 Server started on port ${PORT} 🌐`);
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error) {
      // console.log(error.message);
      logger_1.errorlogger.error("Server Error", error.message);
    }
  });
// !if an unhandled rejection exception occurs, it logs the error, closes the server (it it's running) & exit with a non-zero exit code
process.on("unhandledRejection", (error) => {
  if (server) {
    server.close(() => {
      logger_1.errorlogger.error(error);
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});
// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  logger_1.errorlogger.error(error);
  console.error(error);
  process.exit(1);
});
// Handle unhandled promise rejections
process.on("unhandledRejection", (error) => {
  logger_1.errorlogger.error(error);
  console.error(error);
  process.exit(1);
});
// Handle SIGTERM signal
process.on("SIGTERM", () => {
  logger_1.logger.info("SIGTERM is received");
  if (server) {
    server.close(() => {
      process.exit(0); // Exit with zero exit code indicating graceful shutdown
    });
  }
});
startServer();
//! shut down the server, when SIGTERM signal is received
process.on("SIGTERM", () => {
  logger_1.logger.info("SIGTERM is received");
  if (server) {
    server.close();
  }
});
