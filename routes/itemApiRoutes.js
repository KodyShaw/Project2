var db = require("../models");

module.exports = function(app) {

  app.get("/api/v1/items", function(req, res) {
    db.Item.findAll({}).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.get("/api/v1/items/:uuid", function(req, res) {
    db.Item.findAll({
      where:{
        uuid: req.params.uuid
      }
    }).then(function(dbItem){
      res.json(dbItem);
    });
  });

  app.post("/api/v1/items", function(req, res) {
    db.Item.create(req.body).then(function(dbItem) {
      res.status(200).json(dbItem);
    }).catch(function (err) {
      // handle error;
      console.log(err.message);
      res.status(400).json(err.message);
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
    }).catch(function (err) {
      // handle error;
      console.log(err.message);
      res.status(400).json(err.message);
    });
  });

  app.delete("/api/v1/items/:uuid", function(req, res) {
    db.Item.destroy({ where: { uuid: req.params.uuid } }).then(function(dbItem) {
      res.json(dbItem);
    });
  });
};
