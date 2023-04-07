import {UserService} from "../services/user.service";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export class EmailValidator {
  static createValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      // any async function with result
      return userService
        .checkIfEmailExists(control.value)
        .pipe(
          map((result: boolean) =>
            result ? {emailExists: true} : null
          ), // cast to valid type
          map((errors: { emailExists: boolean } | null) => errors as ValidationErrors)
        );
    };
  }
}

export class EmailServerError {
  static createValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      // any async function with result
      return userService
        .checkIsEmailHasServerErrors(control.value)
        .pipe(
          map((result: any) => {
            return !!result ?  result : null }
          ), // cast to valid type
          map((errors: { emailServerMessage: string } | null) => errors as ValidationErrors)
        );
    };
  }
}
