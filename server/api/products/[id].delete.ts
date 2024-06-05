import Category from '~/server/models/Category'

export default defineEventHandler(async (event) => {
  const params = event.context.params
  const body = await readBody(event)

  if (!params || !params.id) {
    return {
      success: false,
      message: 'El Id es requerido',
    }
  }

  const { id } = params

  try {
    const deletedCategory = await Category.findByIdAndDelete(id).exec();

    if (!deletedCategory) {
      return {
        success: false,
        message: 'No se ha encontrado el Producto para eliminar',
      };
    }

    return {
      success: true,
      message: 'Producto eliminado exitosamente',
    }
  } catch (err) {
    return {
      success: false,
      message: 'No se ha podido actualizar el Producto',
      error: err,
    }
  }
})
