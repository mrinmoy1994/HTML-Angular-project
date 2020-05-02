import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-test',
  templateUrl: './side-test.component.html',
  styleUrls: ['./side-test.component.scss']
})
export class SideTestComponent implements OnInit {
  show = false;
  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  buttonToggle() {
    this.show = true;
  }

  dismissToggle() {
    this.show = false;
  }

  bodyToggle() {
    this.show = false;
  }

}
