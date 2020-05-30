import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss']
})
export class BonusComponent implements OnInit {
  imageObject = [
    {
      image: 'assets/image/how to play 1 by photoshop.png',
      thumbImage: 'assets/image/how to play 1 by photoshop.png',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image: 'assets/image/how to play 2 create team.png',
      thumbImage: 'assets/image/how to play 2 create team.png',
    },
    {
      image: 'assets/image/how to play 3 captain vice captain.png',
      thumbImage: 'assets/image/how to play 3 captain vice captain.png',
      title: 'Example with title.',
    },
    {
      image: 'assets/image/how to play 1 by photoshop.png',
      thumbImage: 'assets/image/how to play 1 by photoshop.png',
      title: 'Hummingbirds are amazing creatures',
    },
    {
      image: 'assets/image/how to play 3 types of tournaments.png',
      thumbImage: 'assets/image/how to play 3 types of tournaments.png',
    },
    {
      image: 'assets/image/how to play 5 join tournament.png',
      thumbImage: 'assets/image/how to play 5 join tournament.png',
      title: 'Example two with title.'
    },
  ];
  toggle = false;
  constructor() {}

  ngOnInit() {}

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

}
