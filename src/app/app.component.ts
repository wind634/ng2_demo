/**
 * Created by wangjiang on 17/5/16.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>

    <a routerLink="/dashboard">Dashboard</a>
    <br/>
    <a routerLink="/heroes">Heroes</a>
    <br/>
    <router-outlet></router-outlet>
    <br/>

  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}
