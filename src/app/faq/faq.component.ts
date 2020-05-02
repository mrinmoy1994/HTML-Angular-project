import { Component, OnInit } from '@angular/core';
import { BlockingProxy } from 'blocking-proxy';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  block: any = [];
  count : any = 100;
  constructor() { 
    this.block.push(true);
    for(let i=1; i<this.count; i++)
    {
      this.block.push(false);
    }
  }

  ngOnInit() {
  }

  onClickToggele(n : any){

    debugger
    for(let i=0; i<this.block.length; i++)
    {
      if(i === n)
        this.block[i] = !this.block[i];
      else
        this.block[i] = false;
    }
  }
}
