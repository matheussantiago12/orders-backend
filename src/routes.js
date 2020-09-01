"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("./controllers/ProductController"));
const ItemController_1 = __importDefault(require("./controllers/ItemController"));
const OrderController_1 = __importDefault(require("./controllers/OrderController"));
const routes = express_1.Router();
/*
 * Product
 */
routes.get('/products', ProductController_1.default.index);
routes.get('/products/:id', ProductController_1.default.show);
routes.post('/products', ProductController_1.default.store);
routes.put('/products/:id', ProductController_1.default.update);
routes.delete('/products/:id', ProductController_1.default.destroy);
/*
 * Item
 */
routes.get('/items', ItemController_1.default.index);
routes.post('/items', ItemController_1.default.store);
/*
 * Order
 */
routes.get('/orders', OrderController_1.default.index);
routes.get('/orders/:id', OrderController_1.default.show);
routes.post('/orders', OrderController_1.default.store);
routes.put('/orders/:id', OrderController_1.default.update);
routes.delete('/orders/:id', OrderController_1.default.destroy);
exports.default = routes;
