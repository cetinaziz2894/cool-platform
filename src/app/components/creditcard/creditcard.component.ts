import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.scss']
})
export class CreditcardComponent implements OnInit {
  
  cardSource: any;

  constructor(private cardsServices : CardService) { }

  ngOnInit(): void {
    this.getCards();
  }
  getCards() {
    this.cardsServices.getCards()
      .subscribe(cards => {
        this.cardSource = cards;
      }
    );
  }

}
