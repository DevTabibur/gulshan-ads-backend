"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = require("../modules/users/users.routes");
const router = express_1.default.Router();
const allRoutes = [
  {
    path: "/register",
    route: users_routes_1.UserRouter,
  },
];
allRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
