import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class UpdatePostsTables extends BaseSchema {
  protected tableName = "posts";

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table
        .integer("user_id")
        .unsigned()
        .references("users.id")
        .onDelete("CASCADE");
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn("user_id");
    });
  }
}
