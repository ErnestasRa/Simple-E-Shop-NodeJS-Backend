import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

interface IItem extends mongoose.Document {
    id: string,
    name: string,
    description: string,
    image: string,
    price: string,
    category: string,
}

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
})

const ItemSchema = mongoose.model<IItem>('Item', itemSchema)


export { ItemSchema }