
exports.up = function(knex) {
    knex.scheme.createTable("teams", (table) => {
        table.increments("team_id").primary();
        table.string("team_name");
        table.boolean("has_paid");
        table.decimal("team_KD");
        table.decimal("team_handicap");
        table.time("team_start_time");
        table.string("team_start_day");

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
    return knex.schema.dropTable("teams");
};
