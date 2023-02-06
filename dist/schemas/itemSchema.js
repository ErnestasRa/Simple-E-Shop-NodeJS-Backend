import mongoose from "mongoose";
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    }
});
const ItemSchema = mongoose.model('Item', itemSchema);
export { ItemSchema };
//# sourceMappingURL=itemSchema.js.map