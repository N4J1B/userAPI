import User from '#models/user'
import { CreateUserValidator } from '#validators/createuser'
import { UpdateUserValidator } from '#validators/updateuser'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {

  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const users = await User.query()
      .orderBy('id', 'asc')
      .paginate(page, 10)
    response.json(users)
  }

  async show({ params, response }: HttpContext) {
    const userId = params.id
    const user = await User.find(userId)
    if (!user) {
      return response.notFound({ message: 'User not found' })
    }
    response.json(user)
  }

  async store({ request, response }: HttpContext) {
    const userData = await CreateUserValidator.validate(request.body())
    const user = await User.create(userData)
    response.created({ "message": "User created successfully", user })
  }

  async update({ params, request, response }: HttpContext) {
    const userId = params.id
    const userData = await UpdateUserValidator.validate(request.body(), { meta: { id: userId } })
    const user = await User.findOrFail(userId)
    user.merge(userData)
    await user.save()
    response.json(user)
  }

  async destroy({ params, response }: HttpContext) {
    const userId = params.id
    const user = await User.findOrFail(userId)
    await user.delete()
    response.ok({ message: 'User deleted successfully' })
  }
}