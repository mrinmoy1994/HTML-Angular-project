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

  facebook(){
    window.location.href='http://www.facebook.com/';
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
