import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { HeaderInfo } from 'src/app/data/Header';
import { Tile } from 'src/app/models/Tile';
import { AddlocationmodalComponent } from '../addlocationmodal/addlocationmodal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1},
    {text: 'Two', cols: 1, rows: 1}
  ];

  route!: string;

  backgroundUrl="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg";

  hidden = false;
  headerInfo!:{title:string, description:string}
  badgeMessageContent : number;
  badgeNotificationContent : number;
  isLocationPage :boolean = false;
  
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(router: Router,private dialog: MatDialog) { 
    this.badgeMessageContent = 2;
    this.badgeNotificationContent = 1;
    this.route = window.location.href.split('http://localhost:4200/')[1];

    router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
            if (event.url === "/locations") {
              this.headerInfo = {
                title:HeaderInfo.locations.title,
                description:HeaderInfo.locations.description
              }
              this.isLocationPage = true;
          } else {
            this.headerInfo = {
              title:HeaderInfo.overview.title,
              description:HeaderInfo.overview.description
            }
          }
          }
        })
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddlocationmodalComponent,{
      width: '640px',disableClose: true 
    });
  }
}
