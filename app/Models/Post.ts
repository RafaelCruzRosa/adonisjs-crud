import { DateTime } from "luxon";
import { BaseModel, column, HasOne, hasOne } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public text: string;

  //TODO: Como fazer relacionamento de posts para usuario
  @hasOne(() => User)
  public user: HasOne<typeof User>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
