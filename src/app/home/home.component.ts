import { Component, OnInit, ElementRef, ViewChild, HostListener, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showSpinner: boolean;
  @ViewChild('rewards') public rewards: ElementRef;
  @ViewChild('aboutus') public aboutus: ElementRef;
  @ViewChild('myHeader') public myheader: ElementRef;
  // @ViewChild('howtoplay') howtoplay: ElementRef;
  @ViewChild('ranking') public ranking: ElementRef;
  @ViewChild('bonus') public bonus: ElementRef;
  @ViewChild('gifts') public gifts: ElementRef;
  showModal: boolean = false;
  changeLogo = false;

  public moveToGifts(): void{
    this.gifts.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  public moveToBonus(): void{
    this.bonus.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  public moveToRanking(): void{
    this.ranking.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  public moveToStructure(): void {
    this.rewards.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  public moveToaboutus(): void {
    this.aboutus.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  public moveTohowtoplay(): void {
    // this.howtoplay.nativeElement.scrollIntoView();
  }

  constructor(private router: Router, private ngZone: NgZone) {
  }

  private eventOptions: boolean | { capture?: boolean, passive?: boolean };

  topFunction() {
      this.myheader.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  ngOnInit() {
    this.showSpinner = true;
    window.scrollTo(0, window.screenTop);
    this.eventOptions = true;
    this.ngZone.runOutsideAngular(() => {
        window.addEventListener('scroll', this.scroll, <any>this.eventOptions);
    });
  }

  scroll = (): void => {
    if (true) {
      this.ngZone.run(() => {
        console.debug("Scroll Event");
        const mybutton = document.getElementById("myBtn");
        const myHeader = document.getElementById('myHeader');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
          myHeader.classList.add('sticky');   
          this.changeLogo = true;
        } else {
          mybutton.style.display = "none";
          myHeader.classList.remove('sticky');
          this.changeLogo = false;
        }

        // const newLocal = "myHeader";
        // var header = document.getElementById(newLocal);
        // var sticky = header.offsetTop;

        // if (window.pageYOffset > sticky) {
        //   header.classList.remove("banner");
        //   header.classList.add("scrollbanner");

        // } else {
        //   header.classList.add("banner");
        //   header.classList.remove("scrollbanner");
        // }
      });
    }
  };

  onGiftsClick() {
    // this.router.navigateByUrl("/aboutus");
    this.moveToGifts();
  }

  onBonusClick() {
    // this.router.navigateByUrl("/aboutus");
    this.moveToBonus();
  }

  onRankingClick() {
    // this.router.navigateByUrl("/aboutus");
    this.moveToRanking();
  }

  onRewardsClick() {
    // this.router.navigateByUrl("/aboutus");
    this.moveToStructure();
  }

  onHowToPlayClick(howtoplay: HTMLElement) {
     howtoplay.scrollIntoView();

    // this.moveTohowtoplay();
  }

  onHomeClick() {
    this.router.navigateByUrl("/home");
  }

  onReferalClick() {
    this.router.navigateByUrl("/aboutus");
  }

  onBody(choice: any) {
    //this.moveToaboutus();
    switch (choice) {
      case 5: {
        this.router.navigateByUrl("/aboutus"); break;
      }
      case 1: {
        this.router.navigateByUrl("/level"); break;
      }
      case 2: {
        this.router.navigateByUrl("/gifts"); break;
      }
      case 3: {
        this.router.navigateByUrl("/bonus"); break;
      }
      case 4: {
        this.router.navigateByUrl("/ranking"); break;
      }
      default: { }
    }

  }
  onAboutUsClick(aboutUs : HTMLElement) {
    //this.router.navigateByUrl("/aboutus");
   // this.moveToaboutus();
   aboutUs.scrollIntoView();
  }

  onLoginClick() {
    this.router.navigateByUrl("/aboutus");
  }

  onSubmitClick() { }

  openModal() {
    this.showModal = true;
  }

  closeModel(event) {
    console.log(event);
    this.showModal = false;
  }
}
