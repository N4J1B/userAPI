import vine from '@vinejs/vine'

export const UpdateUserValidator = vine.compile(
  vine.object({
    email: vine.string().email().unique((async (db, value, field) => {
      const user = await db
        .from('users')
        .where('email', value)
        .whereNot('id', field.meta.id)
        .first()
      return !user
    })).optional(),
    nama: vine.string().minLength(3).maxLength(100).optional(),
    nomorTelepon: vine.string().minLength(10).regex(/^\d+$/).optional(),
    departemen: vine.string().optional(),
    statusAktif: vine.boolean().optional()
  }))