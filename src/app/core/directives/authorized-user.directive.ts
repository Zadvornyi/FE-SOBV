import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Directive({
  selector: '[sobvAuthorizedUser]'
})
export class AuthorizedUserDirective {

  private authService: AuthService;

  constructor(
    private templateRef: TemplateRef<any>,
    authService: AuthService,
    private viewContainer: ViewContainerRef
  ) {
    this.authService = authService;
  }

  ngOnInit() {
    const hasAccess = this.authService.isLoggedIn();

    if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
