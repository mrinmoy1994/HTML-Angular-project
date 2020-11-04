import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {
  href: string = "";
  showHomeHeader = false;
  toggle: boolean = false;

  constructor(private router: Router) { }
  onHowToPlayClick() {}

  ngOnInit() {
  }

  openNav() {
    this.toggle = ! this.toggle;
    if ( this.toggle ) {
      document.getElementById('mySidebar').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';

    } else {
      document.getElementById('mySidebar').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
    }
  }

  onRewardsClick(){
    this.router.navigateByUrl("/aboutus");
  }

  onHomeClick(){
    this.router.navigateByUrl("/home");
  }

  onReferalClick(){
    this.router.navigateByUrl("/aboutus");
  }

  onAboutUsClick(){
    this.router.navigateByUrl("/aboutus");
  }

  onLoginClick(){
    this.router.navigateByUrl("/aboutus");
  }

}
