import { schema, rules } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreatePostValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    text: schema.string({ trim: true }),
    user_id: schema.number([rules.exists({ table: "users", column: "id" })]),
  });

  public messages = {
    "text.required": "Campo texto é obrigatório",
    "text.string": "Campo texto precisa ser um texto",
  };
}
