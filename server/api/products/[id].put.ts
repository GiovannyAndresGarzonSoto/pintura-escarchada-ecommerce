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
    const updatedCategory = await Category.findByIdAndUpdate(id, body, { new: true }).exec()

    if (!updatedCategory) {
      return {
        success: false,
        message: 'No se ha encontrado el Producto para actualizar',
      }
    }

    return {
      success: true,
      data: updatedCategory,
    }
  } catch (err) {
    return {
      success: false,
      message: 'No se ha podido actualizar el Producto',
      error: err,
    }
  }
})
