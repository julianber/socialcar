const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "El campo de name es requerido";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "El campo de email es requerido";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email es invalido";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "El campo de password es requerido";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password debe ser de al menos 6 caracteres";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirmar el password es requerido";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password = "Los passwords no coinciden";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
