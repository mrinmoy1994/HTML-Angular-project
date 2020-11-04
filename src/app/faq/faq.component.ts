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

    //document.getElementById('0').classList.add('active');
  }

  ngOnInit() {
  }

  onClickToggele(n : any){

    debugger
    for(let i=0; i<this.block.length; i++)
    {
      let div = document.getElementById(i.toString());
      if(i === n){
        this.block[i] = !this.block[i];
        div.classList.add('active');
      }
      else{
        this.block[i] = false;
        if(div.classList.contains('active'))
          div.classList.remove('active')
      }
        
    }
  }
}
