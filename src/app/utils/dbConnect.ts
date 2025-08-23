import mongoose from "mongoose";
import config from "../../config";
import { errorlogger, logger } from "../../shared/logger";

const URI = config.main_db_url;
const dbConnect = async (): Promise<void> => {
  try {
    if (!URI) {
      console.log("Database String is not found");
    }
    await mongoose.connect(URI as string);
    // console.log(`🛢 LOCAL Database is connected`)
    logger.info(`🛢 Database is connected successfully 🛢`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // console.log(`database error`, error.message)
    errorlogger.error("Failed to connect database", error);
  }
};

export default dbConnect;
