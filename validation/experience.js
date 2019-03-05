const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "El título del trabajo es requerido";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "El campo compañía es requerido";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "El campo from es requerido";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
