import {appString} from '../utils/contants';

// email Validation
export const emailValidation = (email: any) => {
  let regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailValid: boolean = false;
  let errorMessage: string = '';
  if (email === '' || email == undefined) {
    errorMessage = appString.fieldRequired;
    emailValid = false;
  } else if (regexExp.test(email)) {
    errorMessage = '';
    emailValid = true;
  } else {
    errorMessage = appString.emailNotValid;
    emailValid = false;
  }
  return {errorMessage, emailValid};
};

// field and password Validation
export const InputValidation = (password: any) => {
  let passwordValid: boolean = false;
  let errorMessage: string = '';

  if (password === '' || password == undefined) {
    errorMessage = appString.inputPassword;
    passwordValid = false;
  } else if (password && password.length > 7) {
    errorMessage = '';
    passwordValid = true;
  } else {
    errorMessage = appString.passwordMustBe8;
    passwordValid = false;
  }
  return {errorMessage, passwordValid};
};
