const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "El campo escuela es requerido";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "El campo degree es requerido";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "El campo fieldofstudy es requerido";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
