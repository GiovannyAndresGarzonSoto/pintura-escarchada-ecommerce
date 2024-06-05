import Product from '~/server/models/Product'

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
    const deletedProduct = await Product.findByIdAndDelete(id).exec();

    if (!deletedProduct) {
      return {
        success: false,
        message: 'No se ha encontrado la Categoría para eliminar',
      };
    }

    return {
      success: true,
      message: 'Categoría eliminada exitosamente',
    }
  } catch (err) {
    return {
      success: false,
      message: 'No se ha podido actualizar la Categoría',
      error: err,
    }
  }
})
