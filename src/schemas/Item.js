"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: Number,
    totalValue: Number,
}, {
    timestamps: true,
});
exports.default = mongoose_1.model('Item', ItemSchema);
