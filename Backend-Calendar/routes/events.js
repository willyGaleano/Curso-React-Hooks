/*
    Events Routes
    /api/events
 */

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

const router = Router();

router.use(validarJWT);

//Obtener eventos
router.get("/", getEventos);

//Crear evento
router.post(
  "/",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    //para hacer validaciones personalizadas, sutom recibira un callback para validar el campo start
    check("start", "Fecha de inicio es obligaroria").custom(isDate),
    check("end", "Fecha de finalización es obligaroria").custom(isDate),
  ],
  validarCampos,
  crearEvento
);

//Actualizar evento
router.put("/:id", actualizarEvento);

//Borrar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
