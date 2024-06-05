import { model, Document, Schema } from 'mongoose'

export interface ICategory extends Document {
    name: string
    description: string
    price: number

}

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la Categoría es obligatorio'],
        unique: true,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
})


export default model<ICategory>('Category', categorySchema)