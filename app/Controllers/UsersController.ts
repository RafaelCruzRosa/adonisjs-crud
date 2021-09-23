// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class UsersController {
  public async index() {
    return Database.from("users").paginate(1, 50);
  }
}
