
const db = require("../models");

module.exports = {

  // Gets all code snippets in db
  getAllRoutines: function (req, res) {
    db.Routine.findAll({}).then(function(dbRoutine) {
      res.json(dbRoutine);
    });

  },

  // Gets all code snippets in db for a specified tag
  editRoutine: function (req, res) {
    db.Routine.update(
      {
        routine: req.body.routine,
        hoursChecked: req.body.hoursChecked
      },
      {
        where: {id: req.params.id }
      })
    .then(function(dbRoutine)
    {
      res.json(dbRoutine);
    });
  },




  getUserRoutines: function (req, res) {
    db.Routine.findAll({
      where: {
        User_id: req.params.id
      }
    }).then(function(dbRoutine) {
      res.json(dbRoutine);
    });

  },



//Add new routine for specific user
   addRoutine: function (req, res) {
    db.Routine.create(req.body).then(function(dbRoutine) {
      res.json(dbRoutine);
    });
  },


   deleteRoutine: function(req, res) {

    db.Routine.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRoutine) {
      res.json(dbRoutine);
    });


}

}