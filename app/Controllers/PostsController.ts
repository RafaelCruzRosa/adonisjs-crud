import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import Database from "@ioc:Adonis/Lucid/Database";
import Post from "App/Models/Post";

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
    response.status(201);
    let post = await Post.create({ text: request.body().text });
    return {
      message: "Post created!",
      data: post,
    };
  }

  public async update({ params, request, response }: HttpContextContract) {
    response.status(200);
    let post = await Post.findOrFail(params.id);
    post.text = request.body().text;
    post.save();
    return {
      message: "Post updated!",
      data: post,
    };
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
