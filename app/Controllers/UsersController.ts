import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import Database from "@ioc:Adonis/Lucid/Database";
import User from "App/Models/User";
import CreateUserValidator from "App/Validators/CreateUserValidator";

export default class UsersController {
  public async index() {
    return Database.from("users").paginate(1, 50);
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    return { data: user };
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const request_validated = await request.validate(CreateUserValidator);
      const user = await User.create(request_validated);
      response.status(200);
      return {
        data: user,
      };
    } catch (error) {
      response.status(500);
      return error;
    }
  }
}
