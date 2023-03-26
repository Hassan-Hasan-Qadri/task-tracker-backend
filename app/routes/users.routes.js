module.exports = app => {
  const users = require("../controllers/users.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/user", users.create);

  // Retrieve all users
  router.get("/user", users.findAll);

  // Retrieve all published users
  router.get("/user/published", users.findAllPublished);

  // Retrieve a single user with id
  router.get("/user/:id", users.findOne);

  // Update a user with id
  router.put("/user/:id", users.update);

  // Delete a user with id
  router.delete("/user/:id", users.delete);

  // Delete all users
  router.delete("user/", users.deleteAll);

  app.use('/api/tsu/users', router);
};
