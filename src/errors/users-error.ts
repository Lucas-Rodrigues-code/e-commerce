import { ApplicationError } from "../protocols";

export function duplicatedEmailError(): ApplicationError {
  return {
    name: "DuplicatedEmailError",
    message: "E-mail already registered",
  };
};

export function invalidCredentialsError(): ApplicationError {
  return {
    name: "InvalidCredentialsError",
    message: "email or password are incorrect",
  };
}

export function userError(): ApplicationError {
  return {
    name: "userError",
    message: "user does`t exist",
  };
}