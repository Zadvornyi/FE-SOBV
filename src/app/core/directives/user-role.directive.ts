import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Role} from "../enums";
import {AuthService} from "../services/auth.service";

@Directive({
  selector: '[sobvUserRole]'
})
export class UserRoleDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) { }

  public userRoles?: Role[];

  @Input()
  set sobvUserRole(roles: Role[]) {
    if (!roles || !roles.length) {
      throw new Error('Roles value is empty or missed');
    }

    this.userRoles = roles;
  }

  ngOnInit() {
    let hasAccess = false;

    if (this.authService.isLoggedIn() && this.userRoles) {
      hasAccess = this.userRoles.some(r => this.authService.hasRole(r));
    }

    if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
