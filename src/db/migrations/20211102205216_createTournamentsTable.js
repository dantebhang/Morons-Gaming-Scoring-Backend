exports.up = function (knex) {
	return knex.schema.createTable("tournaments", (table) => {
        table.increments("tournament_id").primary();
        table.string("tournament_name");
        table.date("start_date");
        table.date("end_date");
        table.string("map_name");
        table.integer("squad_size");
        table.decimal("time_length");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
	return knex.schema.dropTable("tournaments");
};
