import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// declare ga as a function to set and sent the events
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //  window.scrollTo(0,0);
  }

  title = 'WepApplication';
  constructor(public router: Router) {

    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');

      }

    });
  }
  onActivate(event) {
    window.scroll(0, 0);
  }

}
