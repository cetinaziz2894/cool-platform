import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cardSource: any;
  colbreakpoint: number | undefined;
  colbreakpoint1: number | undefined;
  
  constructor(private cardsServices : CardService) { }

  ngOnInit(): void {
    this.getCards(); 
    this.colbreakpoint = (window.innerWidth <= 800) ? 4 : 3;
    this.colbreakpoint1 = (window.innerWidth <= 800) ? 4 : 2;
  }
  getCards() {
    this.cardsServices.getCards()
      .subscribe(cards => {
        this.cardSource = cards;
      }
    );
  }

  onResize(event:any) {
    this.colbreakpoint = (window.innerWidth <= 800) ? 4 : 3;
    this.colbreakpoint1 = (window.innerWidth <= 800) ? 4 : 2;
  }
}
