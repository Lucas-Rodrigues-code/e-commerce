export type ApplicationError = {
    name: string;
    message: string;
  };

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