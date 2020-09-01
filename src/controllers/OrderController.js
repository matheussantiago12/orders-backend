"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(require("../schemas/Order"));
class OrderController {
    async index(req, res) {
        try {
            const orders = await Order_1.default.find();
            return res.json(orders);
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on loading orders' });
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            let order = await Order_1.default.findById(id);
            order = await order.populate('items').execPopulate();
            order = await order.populate('items.product').execPopulate();
            return res.json(order);
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on loading order' });
        }
    }
    async store(req, res) {
        var _a, _b;
        try {
            const { items, description } = req.body;
            let order = await Order_1.default.create({ description });
            let totalValue = 0;
            (_a = order.items) === null || _a === void 0 ? void 0 : _a.push(...items);
            order = await order.populate('items').execPopulate();
            (_b = order.items) === null || _b === void 0 ? void 0 : _b.map(item => {
                totalValue += item.totalValue;
            });
            order.totalValue = totalValue;
            order.save();
            return res.json(order);
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on creating order' });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const { description, situation } = req.body;
            const order = await Order_1.default.findByIdAndUpdate(id, { description, situation }, {});
            return res.json(order);
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on updating order' });
        }
    }
    async destroy(req, res) {
        try {
            const { id } = req.params;
            await Order_1.default.findByIdAndRemove(id);
            return res.json({
                message: 'Order successfully deleted',
                id,
            });
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on removing order' });
        }
    }
}
exports.default = new OrderController();
