const router = require("express").Router({ mergeParams: true });
const controller = require("./players.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:playerId").all(methodNotAllowed);

module.exports = router;
