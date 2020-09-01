"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../schemas/Item"));
class ItemController {
    async index(req, res) {
        try {
            const items = await Item_1.default.find().populate('product');
            return res.json(items);
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on loading items' });
        }
    }
    async store(req, res) {
        try {
            const { product, quantity } = req.body;
            let item = await Item_1.default.create({ product, quantity });
            item = await item.populate('product').execPopulate();
            item.totalValue = (item.product.price - (item.product.price / 100 * item.product.discount)) * item.quantity;
            await item.save();
            return res.json(item);
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on creating item' });
        }
    }
}
exports.default = new ItemController();
