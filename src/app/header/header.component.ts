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

  constructor(private router: Router) { }
  onHowToPlayClick() {}

  ngOnInit() {
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
