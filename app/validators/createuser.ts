import vine from '@vinejs/vine'

export const CreateUserValidator = vine.compile(
  vine.object({
    email: vine.string().email().unique((async (db, value) => {
      const user = await db
        .from('users')
        .where('email', value)
        .first()
      return !user
    })),
    nama: vine.string().minLength(3).maxLength(100),
    nomorTelepon: vine.string().minLength(10).regex(/^\d+$/),
    departemen: vine.string()
  })
)