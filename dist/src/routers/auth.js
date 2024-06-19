"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("@controller/auth");
router.post("/register", auth_1.registroPost);
router.post("/login", auth_1.loginPost);
router.post("/token", auth_1.verificarTokenPost);
exports.default = router;
