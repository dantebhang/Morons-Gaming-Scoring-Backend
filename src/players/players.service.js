const knex = require("../db/connection");

function list() {
	return knex("players").select("*");
}

module.exports = {
	list,
};
