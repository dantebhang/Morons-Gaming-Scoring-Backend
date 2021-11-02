
exports.up = function(knex) {
    return knex.schema.createTable("players", (table) => {
        table.increments("player_id").primary();
        table.string("activision_id");
        table.string("xbox_tag")
        table.string("playStation_name");
        table.string("battlenet_id");
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("players");
};
