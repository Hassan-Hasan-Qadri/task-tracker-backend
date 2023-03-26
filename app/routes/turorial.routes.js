module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const users = require("../controllers/users.controller.js");


  var router = require("express").Router();
  var userRoute = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

   // Create a new user
   userRoute.post("/", users.create);
   
   userRoute.post("/login", users.login);

   // Retrieve all users
   userRoute.get("/", users.findAll);
 
   // Retrieve all published users
   userRoute.get("/published", users.findAllPublished);
 
   // Retrieve a single user with id
   userRoute.get("/:id", users.findOne);
 
   // Update a user with id
   userRoute.put("/:id", users.update);
 
   // Delete a user with id
   userRoute.delete("/:id", users.delete);
 
   // Delete all users
  //  router.delete("user/", users.deleteAll);
 

  app.use('/api/tsu', router);
  app.use('/api/users',userRoute);
};
