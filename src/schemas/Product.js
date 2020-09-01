"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    sku: String,
    title: String,
    price: Number,
    discount: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.model('Product', ProductSchema);
