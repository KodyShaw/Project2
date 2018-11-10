var db = require("../models");

module.exports = function(app) {

  app.get("/api/v1/items", function(req, res) {
    db.Item.findAll({}).then(function(dbItem) {
      res.json(dbItem);
      console.log(dbItem);
    });
  });

  app.get("/api/v1/items/:uuid", function(req, res) {
    db.Item.findAll({
      where:{
        uuid: req.params.uuid
      }
    }).then(function(dbItem){
      res.json(dbItem);
      console.log(dbItem);
    });
  });

  app.post("/api/v1/items", function(req, res) {
    db.Item.create(req.body).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.put("/api/v1/items/", function(req, res) {
    db.Item.update(
      req.body,{
        where:{
          uuid: req.body.uuid
        }
      }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.delete("/api/v1/items/:uuid", function(req, res) {
    db.Item.destroy({ where: { uuid: req.params.uuid } }).then(function(dbItem) {
      res.json(dbItem);
    });
  });
};
