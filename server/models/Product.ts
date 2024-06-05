import { model, Document, Schema } from 'mongoose'

export interface IProduct extends Document {
    name: string
    description: string
    price: number
    category: Schema.Types.ObjectId
    stock: number
    imgUrl: string
}

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre del Producto es obligatorio'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'El precio del Producto es obligatorio'],
        min: 0,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'La Categoria del Producto es obligatoria'],
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    imgUrl: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
    versionKey: false
})


export default model<IProduct>('Product', productSchema)