import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationsService } from 'src/app/services/locations.service';
import { AddlocationmodalComponent } from '../addlocationmodal/addlocationmodal.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  
  locationSource:any[] = [];

  allLocations: any;

  locationList = [
    "Maslak",
    "Kadikoy",
    "Besiktas"
  ];
  constructor(private locationsServices : LocationsService, private dialog: MatDialog) { 
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddlocationmodalComponent,{
      width: '640px',disableClose: true 
    });
  }
  ngOnInit(): void {
    this.getLocationList();
  }

  getLocationList():void{
    this.locationsServices.getLocations()
      .subscribe( items => {
          const first = items.findIndex(el => el.name === this.locationList[0]);
          const second = items.findIndex(el => el.name === this.locationList[1]);          
          const third = items.findIndex(el => el.name === this.locationList[2]);
          this.locationSource.push(items[first]);
          this.locationSource.push(items[second]);
          this.locationSource.push(items[third]);
      }
    );
  }

}
