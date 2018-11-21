var db = require("../models");

module.exports = function (app) {

  app.get("/api/v1/items", function (req, res) {
    try {
      db.Item.findAll({}).then(function (dbItem) {
        res.status(200).json(dbItem);
      });
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.get("/api/v1/items/:uuid", function (req, res) {
    try {
      var query = {};
      query.uuid = req.params.uuid;

      db.Item.findOne({
        where: query
      }).then(function (dbItem) {
        res.json(dbItem);
      });
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.post("/api/v1/items", function (req, res) {
    try {
      db.Item.create(req.body).then(function (dbItem) {
        res.status(200).json(dbItem);
      }).catch(function (err) {
        console.log(err.message);
        res.status(400).json(err.message);
      });
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.put("/api/v1/items/", function (req, res) {
    try {
      var query = {};
      query.uuid = req.body.uuid;

      db.Item.update(
        req.body, {
          where: query
        }).then(function (dbItem) {
          res.json(dbItem);
        }).catch(function (err) {
          console.log(err.message);
          res.status(400).json(err.message);
        });
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });

  app.delete("/api/v1/items/:uuid", function (req, res) {
    try {
      var query = {};
      query.uuid = req.body.uuid;

      db.Item.destroy({
        where: query
      }).then(function (dbItem) {
        res.json(dbItem);
      });
    } catch (err) {
      res.status(400).json("Invalid request");
    }
  });
};



/////////////////////////////////////////////////////

/* 

  app.get("/api/v1/items/low", function(req, res) {
    try{
      var query = {};
      query.companyUuid = req.body.companyUuid;
      query.sequelize.where(
        sequelize.literal("100/expectedQuantity * quantity"), "<", lowThreshHoldPercentage);

      // 100\expectedStack * currentStock  = currentPercent 
      // if currentPercent < StorePercent = is Low

      db.Item.findAll({
        where: query,
        include: [db.Company]
      }).then(function(dbItem) {
        res.json(dbItem);
      });
    }catch(err){
      res.status(400).json("Invalid request");
    } 
  });*/
