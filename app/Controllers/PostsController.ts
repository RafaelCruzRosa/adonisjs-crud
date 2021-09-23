import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import Post from "App/Models/Post";
import CreatePostValidator from "App/Validators/CreatePostValidator";
import UpdatePostValidator from "App/Validators/UpdatePostValidator";

export default class PostsController {
  public async index() {
    return Database.from("posts").paginate(1, 50);
  }

  public async show({ params, response }: HttpContextContract) {
    let post = await Post.findOrFail(params.id);
    response.status(200);
    return {
      data: post,
    };
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const request_validated = await request.validate(CreatePostValidator);
      //TODO: Validar se está salvando certo o usuario do post
      let post = await Post.create(request_validated);

      response.status(201);
      return {
        message: "Post created!",
        data: post,
      };
    } catch (error) {
      response.status(500);
      return error;
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    let post = await Post.findOrFail(params.id);
    try {
      const request_validated = await request.validate(UpdatePostValidator);
      post.text = request_validated.text;
      post.save();
      response.status(200);
      return {
        message: "Post updated!",
        data: post,
      };
    } catch (error) {
      return error;
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    let post = await Post.findOrFail(params.id);
    post.delete();
    response.status(401);
    return {
      message: "Post deleted",
    };
  }
}
