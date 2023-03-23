import { Component, OnInit } from '@angular/core';
import {Role} from "../../enums";

@Component({
  selector: 'sobv-dashboard',
  templateUrl: './sobv-dashboard.component.html',
  styleUrls: ['./sobv-dashboard.component.scss']
})
export class SobvDashboardComponent implements OnInit {
  public roles = Role
  constructor() { }

  ngOnInit(): void {

  }

}
