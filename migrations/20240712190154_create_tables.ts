import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
      .createTable("settings", (table) => {
        table.string("key").notNullable().primary(),
          table.string("value").notNullable();
      })
      .createTable("playlist", (table) => {
        table.integer("playlist_id").notNullable().primary(),
        table.integer("login_id").notNullable(),
        table.timestamp("created_at").notNullable(),
        table.string("created_by").notNullable(),
        table.timestamp("shared_at").notNullable(),
        table.string("shared_by").notNullable(),
        table.string("deleted_ind"),
        table.timestamp("deleted_at"),
        table.string("deleted_by")
      })
      .createTable("playlist_details", (table) => {
        table.integer("playlist_id").references("playlist.playlist_id").onUpdate("CASCADE").onDelete("CASCADE"),
        table.string("playlist_name").notNullable(),
        table.integer("playlist_code").notNullable().primary(),
        table.timestamp("created_at").notNullable(),
        table.string("created_by").notNullable(),
        table.timestamp("modified_at"),
        table.string("modified_by")
      })
      .createTable("playlist_tracks", (table) => {
        table.integer("playlist_id").references("playlist.playlist_id").onUpdate("CASCADE").onDelete("CASCADE"),
        table.integer("track_id").notNullable().primary(),
        table.timestamp("added_on").notNullable(),
        table.timestamp("created_at").notNullable(),
        table.string("created_by").notNullable(),
        table.string("deleted_ind"),
        table.timestamp("deleted_at"),
        table.string("deleted_by")
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
    .dropTable("playlist_tracks")
    .dropTable("playlist_details")
    .dropTable("playlist")
    .dropTable("settings");
}