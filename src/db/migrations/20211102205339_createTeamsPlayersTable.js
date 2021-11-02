
exports.up = function(knex) {
    return knex.schema.createTable("teams_players", (table) => {
        table.integer("team_id").unsigned().notNullable();
        table
            .foreign("team_id")
            .references("team_id")
            .inTable("teams")
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
    return knex.schema.dropTable("teams_players");
};
