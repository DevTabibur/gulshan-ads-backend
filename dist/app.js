"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dbConnect_1 = __importDefault(require("./app/utils/dbConnect"));
const app = (0, express_1.default)();
// Enable CORS
app.use((0, cors_1.default)({
    origin: [
        "https://biggaponbd.com", // production frontend
        "http://localhost:3000", // local frontend (development)
    ],
    credentials: true, // for automatically storing jwt with cookie
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express_1.default.json({ limit: "50mb" })); // to handle too many request entity
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static("./upload"));
app.set("view engine", "ejs");
(0, dbConnect_1.default)();
app.get("/", (req, res) => {
    res.render("index.ejs");
});
// ** all routes
app.use("/api/v1", routes_1.default);
console.log("env development =>>>", app.get("env"));
//! global error handler
app.use(globalErrorHandler_1.default);
//! handle not found
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
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
exports.default = app;
