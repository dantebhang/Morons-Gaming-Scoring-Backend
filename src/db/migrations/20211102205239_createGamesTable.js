
exports.up = function(knex) {
    return knex.schema.createTable("games", (table) => {
        table.increments("game_id").primary();
        table.integer("team_placement");
        table.integer("game_score");
        table.integer("team_kill_pts");
        table.integer("team_dmg_pts");

        table.integer("team_id").unsigned().notNullable();
        table
            .foreign("team_id")
            .references("team_id")
            .inTable("teams")
            .onDelete("CASCADE");

        table.integer("tournament_id").unsigned().notNullable();
        table
            .foreign("tournament_id")
            .references("tournament_id")
            .inTable("tournaments")
            .onDelete("CASCADE");

        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("games");
};
