import { ItemSchema } from "../schemas/itemSchema.js";
import uniqid from 'uniqid';
const getItems = async (req, res) => {
    const allItems = await ItemSchema.find({});
    res.send(allItems);
};
const getItemsByCategory = async (req, res) => {
    const { category } = req.body;
    if (category === 'All') {
        const allItems = await ItemSchema.find({});
        res.send(allItems);
    }
    else {
        const categoryItems = await ItemSchema.find({ category: category });
        res.send(categoryItems);
    }
};
const postItem = async (req, res) => {
    const { name, description, image, price, category } = req.body;
    async function newItem() {
        const item = new ItemSchema({
            id: uniqid(),
            name,
            description,
            image,
            price,
            category,
        });
        console.log(item);
        await item.save();
    }
    res.send({ OK: "User created" });
    newItem();
};
export { postItem, getItems, getItemsByCategory };
//# sourceMappingURL=test.js.map