import Product from "~/server/models/Product";

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
        const data = await Product.findById(id)
            .exec()

        if (!data) {
            return {
                success: false,
                message: 'Ha ocurrido un problema al listar el Producto'
            }
        }

        return {
            success: true,
            data
        }
    } catch (err) {
        return {
            success: false,
            message: 'No se han podido listar el Producto',
            err
        }
    }
})