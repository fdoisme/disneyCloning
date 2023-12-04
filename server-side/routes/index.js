const express = require("express");
const router = express.Router();
const Controller = require("../controllers/index");
const authentication = require("../middleware/authentication");


// client-user
router.get("/user/movies", Controller.movies) //done
router.get("/user/movies/:id", Controller.movie) //done

// client-admin
router.post("/admin/register", Controller.register) //done
router.post("/admin/login", Controller.login) //done

router.use(authentication)
router.get("/admin/movies", Controller.movies) //done
router.post("/admin/movies", Controller.createMovie) //done
router.put("/admin/movies/:id", Controller.editMovie) //done
router.delete("/admin/movies/:id", Controller.deleteMovie) //done

router.get("/admin/genres", Controller.genres) //done
router.post("/admin/genres", Controller.createGenres) //done
router.put("/admin/genres/:id", Controller.editGenres) //done
router.delete("/admin/genres/:id", Controller.deleteGenres) //done

module.exports = router