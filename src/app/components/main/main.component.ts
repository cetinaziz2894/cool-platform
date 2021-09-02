import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  colbreakpoint: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.colbreakpoint = (window.innerWidth <= 1100) ? 4 : 2;
  }
  
  onResize(event:any) {
    this.colbreakpoint = (event.target.innerWidth <= 1100) ? 4 : 2;
  }

}
