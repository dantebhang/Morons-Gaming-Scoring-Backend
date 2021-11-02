
exports.up = function(knex) {
    return knex.scheme.createTable("player_stats", (table) => {
        table.increments("player_stats_id").primary();
        table.integer("player_kills");
        table.integer("player_dmg");

        table.integer("game_id").unsigned().notNullable();
        table
            .foreign("game_id")
            .references("game_id")
            .inTable("games")
            .onDelete("CASCADE");

        table.integer("player_id").unsigned().notNullable();
        table
            .foreign("player_id")
            .references("player_id")
            .inTable("players")
            .onDelete("CASCADE");
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("player_stats");
};
