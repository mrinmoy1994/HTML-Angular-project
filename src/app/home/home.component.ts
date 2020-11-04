import { Component, OnInit, ElementRef, ViewChild, HostListener, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {GoogleAnalyticsServiceService} from "../google-analytics-service.service"; // import our analytics service


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageObject = [
    {
      image: 'assets/image/comment1.JPG',
      thumbImage: 'assets/image/comment1.JPG',
      //title: 'comment1',
    },
    {
      image: 'assets/image/comment2.jpg',
      thumbImage: 'assets/image/comment2.jpg',
    },
    {
      image: 'assets/image/comment3.jpg',
      thumbImage: 'assets/image/comment3.jpg',
     // title: 'Example with title.',
    },
    {
      image: 'assets/image/comment4.jpg',
      thumbImage: 'assets/image/comment4.jpg',
      //title: 'Hummingbirds are amazing creatures',
    },
    {
      image: 'assets/image/comment5.jpg',
      thumbImage: 'assets/image/comment5.jpg',
    },
    // {
    //   image: 'assets/image/how to play 5 join tournament.png',
    //   thumbImage: 'assets/image/how to play 5 join tournament.png',
    //   //title: 'Example two with title.'
    // },
  ];
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
  toggle: boolean = false;

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

  constructor(private router: Router, private ngZone: NgZone, public googleAnalyticsService: GoogleAnalyticsServiceService) {
  }

  private eventOptions: boolean | { capture?: boolean, passive?: boolean };

  topFunction() {
      //this.myheader.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
      this.googleAnalyticsService.eventEmitter("userPage", "like", "userLabel", 1);
  }

  ngOnInit() {
    this.showSpinner = true;
    window.scrollTo(0, window.screenTop);
    this.eventOptions = true;
    this.ngZone.runOutsideAngular(() => {
        window.addEventListener('scroll', this.scroll, <any>this.eventOptions);
    });
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

  scroll = (): void => {
    if (true) {
      this.ngZone.run(() => {
        console.debug("Scroll Event");
        //const mybutton = document.getElementById("myBtn");
        const myHeader = document.getElementById('myHeader');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         // mybutton.style.display = "none";
          myHeader.classList.add('sticky');   
          this.changeLogo = true;
        } else {
         // mybutton.style.display = "none";
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
