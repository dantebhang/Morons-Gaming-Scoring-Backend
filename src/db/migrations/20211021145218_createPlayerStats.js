exports.up = function (knex) {
  return knex.schema.createTable("player_stats", (table) => {
    table.increments(stat_id).primary();
    table.integer("team_id").unsigned().notNullable();
    table.foreign("team_id").references("team_id").inTable("teams");
    table.integer("tournament_id").unsigned().notNullable();
    table.foreign("tournament_id").references("team_id").inTable("tournaments");
    table.integer("player_id").unsigned().notNullable();
    table.foreign("player_id").references("player_id").inTable("players");
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("player_stats")
};
