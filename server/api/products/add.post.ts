import Product, { IProduct } from "~/server/models/Product";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { name, description, price, category, stock, imgUrl } = body

        const newProduct: IProduct = new Product({
            name, description, price, category, stock, imgUrl
        })
        await newProduct.save()
        
        return {
            success: true,
            data: newProduct
        }
    } catch (err) {
        return {
            success: false,
            message: 'No se ha podido agregar el Producto',
            err
        }
    }
})