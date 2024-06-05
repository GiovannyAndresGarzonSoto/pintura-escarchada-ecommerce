import Category, { ICategory } from "~/server/models/Category";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const { name } = body

        const newCategory: ICategory = new Category({
            name
        })
        await newCategory.save()
        
        return {
            success: true,
            data: newCategory
        }
    } catch (err) {
        return {
            success: false,
            message: 'No se ha podido agregar la Categoría',
            err
        }
    }
})