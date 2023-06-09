import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginTemplate';
  //Brower refresh code
  subscription: Subscription | undefined;

  constructor(private router: Router) {
    //Brower refresh code
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
    });
  }



}
