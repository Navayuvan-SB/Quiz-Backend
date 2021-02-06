// Import statements
const joi = require("@hapi/joi");

// Register Validation
const registerValidation = (data) => {
  const schema = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().min(6).email(),
    role: joi.string().required(),
    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
        )
      )
      .error(() => {
        return new Error("");
      }),
  });

  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = joi.object({
    email: joi.string().min(6).email(),
    password: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
        )
      )
      .error(() => {
        return new Error("");
      }),
  });

  return schema.validate(data);
};

// User data validation
const userValidation = (data) => {
  const schema = joi.object({
    name: joi.string().min(6).required(),
  });

  return schema.validate(data);
};

// Password Validation
const passwordValidation = (data) => {
  const schema = joi.object({
    oldPassword: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
        )
      )
      .error(() => {
        return new Error("");
      }),
    newPassword: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
        )
      )
      .error(() => {
        return new Error("");
      }),
  });

  return schema.validate(data);
};

// Valdiate tree data
const treeValidation = (data) => {
  const schema = joi.object({
    title: joi.string(),
    isCompleted: joi.boolean(),
  });

  return schema.validate(data);
};

// Validate leaf data
const leafValidation = (data) => {
  const schema = joi.object({
    text: joi.string(),
    isCompleted: joi.boolean(),
  });

  return schema.validate(data);
};

// Validate forgot password data
const forgotPasswordValidation = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
  });

  return schema.validate(data);
};

// Validate forgot password data
const otpValidation = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    otp: joi.string().min(6).max(6).required(),
  });
  return schema.validate(data);
};

const forgotChangePasswordValidation = (data) => {
  const schema = joi.object({
    newPassword: joi
      .string()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
        )
      )
      .error(() => {
        return new Error("");
      }),
  });

  return schema.validate(data);
};

// Exports
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.treeValidation = treeValidation;
module.exports.leafValidation = leafValidation;
module.exports.userValidation = userValidation;
module.exports.passwordValidation = passwordValidation;
module.exports.forgotPasswordValidation = forgotPasswordValidation;
module.exports.otpValidation = otpValidation;
module.exports.forgotChangePasswordValidation = forgotChangePasswordValidation;
