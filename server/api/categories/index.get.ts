import Category from "~/server/models/Category";

export default defineEventHandler(async (event) => {
    try{
        const data = await Category.find()
        .sort('name')
        .exec()
        if(!data){
            return {
                success: false,
                message: 'Ha ocurrido un problema al listar las Categorías'
            }
        }

        return {
            success: true,
            data
        }
    }catch(err){
        return {
            success: false,
            message: 'No se han podido listar las Categorías',
            err
        }
    }
})