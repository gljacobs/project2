const router = require("express").Router();
const usercontroller = require("../../controller/user-controller");


// equivalent to "api/users"
router.route("/")

    .get(usercontroller.getAllUsers)

    .post(usercontroller.addUser);

router.route("/:id")

	.get(usercontroller.getUser)

    .put(usercontroller.editUser);

   

router.route("/test")
 	.post(usercontroller.updatePhoto);




module.exports = router;







