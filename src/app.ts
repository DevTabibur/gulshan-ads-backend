import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import routes from "./app/routes";

import cookieParser from "cookie-parser";
import dbConnect from "./app/utils/dbConnect";

const app: Application = express();

// Enable CORS
app.use(
  cors({
    origin: true, // Allow all origins
    credentials: true, // for automatically storing jwt with cookie
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
); // for cookie (refresh token)

app.use(express.json({ limit: "50mb" })); // to handle too many request entity
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("./upload"));
app.set("view engine", "ejs");

dbConnect();

app.get("/", (req: Request, res: Response) => {
  res.render("index.ejs");
});

// ** all routes
app.use("/api/v1", routes);

console.log("env development =>>>", app.get("env"));

//! global error handler
app.use(globalErrorHandler);

//! handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: `No API is found. Try Another API`,
    errorMessages: [
      {
        message: `No API is found for ${req.method} Method & ${req.originalUrl}`,
        path: req.originalUrl,
      },
    ],
  });
  next();
});

export default app;
