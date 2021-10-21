exports.up = function (knex) {
  return knex.schema.createTable("tournaments", (table) => {
    table.increments("tournament_id").primary();
    table.string("map_name");
    table.dateTime("date");
    table.string("start_time");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tournaments");
};
