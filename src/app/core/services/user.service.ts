import { Injectable } from '@angular/core';
import {delay, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private existingUsernames = ['Batman', 'Superman', 'Joker', 'Luthor'];
  private existingEmails = ['Batman@gmail.com', 'Superman@gmail.com', 'Joker@gmail.com', 'Luthor@gmail.com'];

  checkIfUsernameExists(value: string) {
    return of(this.existingUsernames.some((a) => a === value)).pipe(
      delay(1000)
    );
  }

  checkIfEmailExists(value: string) {
    return of(this.existingUsernames.some((a) => a === value)).pipe(
      delay(1000)
    );
  }

  checkIsEmailHasServerErrors(value: string) {
    // TODO: connect to server
    const serverMessage = this.existingEmails.find((a) => a === value) ?  "Message error from server" : "No errors";

    return of( {errorMessage: serverMessage}).pipe(
      delay(1000)
    );
  }
}
