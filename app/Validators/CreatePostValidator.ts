import { schema } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreatePostValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    text: schema.string({ trim: true }),
  });

  public messages = {
    "text.required": "Campo texto é necessário",
    "text.string": "Campo texto precisa ser um texto",
  };
}
