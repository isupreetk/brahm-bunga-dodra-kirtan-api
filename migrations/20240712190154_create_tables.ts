import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("settings", (table) => {
        table.string("key").notNullable().primary(),
          table.string("value").notNullable();
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("settings");
}