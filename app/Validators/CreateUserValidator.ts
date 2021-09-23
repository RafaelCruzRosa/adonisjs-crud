import { schema } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
  });

  public messages = {
    "name.required": "Campo nome é obrigatório",
    "name.string": "Campo nome precisa ser um texto",
  };
}
