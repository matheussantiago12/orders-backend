"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var Situation;
(function (Situation) {
    Situation[Situation["EmAnalise"] = 0] = "EmAnalise";
    Situation[Situation["Aprovado"] = 1] = "Aprovado";
    Situation[Situation["Cancelado"] = 2] = "Cancelado";
})(Situation || (Situation = {}));
const OrderSchema = new mongoose_1.Schema({
    items: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Item',
        },
    ],
    totalValue: Number,
    description: String,
    situation: {
        type: String,
        enum: [0, 1, 2],
        default: 0
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.model('Order', OrderSchema);
