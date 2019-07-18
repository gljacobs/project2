const router = require("express").Router();
const routinecontroller = require("../../controller/routine-controller");


// Matches with "api/routines/"
router.route("/")

   .get(routinecontroller.getAllRoutines);




// Matches with "api/routines/:id"
router.route("/:id")



   .get(routinecontroller.getUserRoutines)

   .post(routinecontroller.addRoutine)

   .delete(routinecontroller.deleteRoutine);

router.route("/:id/:day")



  .put(routinecontroller.editUserRoutine);
  


 router.route("/complete/:id/:day")

   .put(routinecontroller.updateUserComplete);

module.exports = router;



