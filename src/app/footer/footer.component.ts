import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit() {
  }

  onAboutUsClick(){
    this.router.navigateByUrl("/aboutus");
  }

  onLegality(){
    this.router.navigateByUrl("/legality");
  }

  onFps(){
    this.router.navigateByUrl("/fps");
  }
  
  onHomeClick() {
    this.router.navigateByUrl("/home");
  }

  onWhyCaptainx(){
    this.router.navigateByUrl("/whycaptainx")
  }

  onPrivacy(){
    this.router.navigateByUrl("/privacy")
  }
  onTerms(){
    this.router.navigateByUrl("/terms")
  }

  onGuide(){
    this.router.navigateByUrl("/userguide")
  }

  onFAQ(){
    this.router.navigateByUrl("/faq")
  }

  onReferalClick() {
    this.router.navigateByUrl("/aboutus");
  }

  facebook(){
    window.location.href='https://www.facebook.com/CaptainX-Fantasy-Cricket-104641251383849';
   // this.router.navigate('http://www.google.com/');
  }
  google(){
    window.location.href='http://www.google.com/';
   // this.router.navigate('http://www.google.com/');
  }
  instagram(){
    window.location.href='http://www.instagram.com/';
   // this.router.navigate('http://www.google.com/');
  }
  whatsapp(){
    window.location.href='http://www.google.com/';
   // this.router.navigate('http://www.google.com/');
  }

  telegram(){}

}
