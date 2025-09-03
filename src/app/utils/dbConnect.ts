import mongoose from "mongoose";
import { errorlogger, logger } from "../../shared/logger";
import config from "../../config";

const URI: string = config.main_db_url as string;
console.log("URI", URI)
const dbConnect = async (): Promise<void> => {
  try {
    if (!URI) {
      console.log("Database String is not found");
    }
    // await mongoose.connect(URI as string);
    await mongoose.connect(URI, {
      maxPoolSize:10,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if MongoDB is unreachable
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      connectTimeoutMS: 10000, // Timeout for initial connection
    })
    // console.log(`🛢 LOCAL Database is connected`)
    logger.info(`🛢 Database is connected successfully 🛢`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // console.log(`database error`, error.message)
    errorlogger.error("Failed to connect database", error);
  }
};

export default dbConnect;
