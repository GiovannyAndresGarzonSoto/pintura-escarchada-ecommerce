import Product from "~/server/models/Product";

export default defineEventHandler(async (event) => {
    try{
        const data = await Product.find()
        .populate('category')
        .sort('name')
        .exec()
        if(!data){
            return {
                success: false,
                message: 'Ha ocurrido un problema al listar los Productos'
            }
        }

        return {
            success: true,
            data
        }
    }catch(err){
        return {
            success: false,
            message: 'No se han podido listar los Productos',
            err
        }
    }
})