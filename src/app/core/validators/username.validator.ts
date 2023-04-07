import {UserService} from "../services/user.service";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators"


export class UsernameValidator {
  static createValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return userService
        .checkIfUsernameExists(control.value)
        .pipe(
          map((result: boolean) =>
            result ? {usernameExists: true} : null
          ), // cast to valid type
          map((errors: { usernameExists: boolean } | null) => errors as ValidationErrors)
        );
    };
  }
}

