"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../schemas/Product"));
class ProductController {
    async index(req, res) {
        try {
            const products = await Product_1.default.find();
            return res.json(products);
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on loading products' });
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            const product = await Product_1.default.findById(id);
            return res.json(product);
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on loading product' });
        }
    }
    async store(req, res) {
        try {
            const { sku, title, price, discount } = req.body;
            const product = await Product_1.default.create({ sku, title, price, discount });
            return res.json(product);
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on creating product' });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const { sku, title, price, discount } = req.body;
            const product = await Product_1.default.findByIdAndUpdate(id, { sku, title, price, discount }, {});
            return res.json(product);
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on updating product' });
        }
    }
    async destroy(req, res) {
        try {
            const { id } = req.params;
            await Product_1.default.findByIdAndRemove(id);
            return res.json({
                message: 'Order successfully deleted',
                id,
            });
        }
        catch (error) {
            return res.status(400).send({ error: 'Error on removing product' });
        }
    }
}
exports.default = new ProductController();
