import Category from "~/server/models/Category";

export default defineEventHandler(async (event) => {
    try {
        const params = event.context.params;

        if (!params || !params.id) {
            return {
                success: false,
                message: 'El Id es requerido',
            };
        }

        const { id } = params
        const data = await Category.findById(id)
            .exec()

        if (!data) {
            return {
                success: false,
                message: 'Ha ocurrido un problema al listar la Categoría'
            }
        }

        return {
            success: true,
            data
        }
    } catch (err) {
        return {
            success: false,
            message: 'No se han podido listar la Categoría',
            err
        }
    }
})