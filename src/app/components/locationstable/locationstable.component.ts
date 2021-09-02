import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locationstable',
  templateUrl: './locationstable.component.html',
  styleUrls: ['./locationstable.component.scss']
})
export class LocationstableComponent implements AfterViewInit {

  locationsSource: any;

  constructor(private locationsServices : LocationsService) { }
  
  displayedColumns: string[] = ['image', 'licences','enrollmentDate','products', ];
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  ngAfterViewInit(): void {
    this.getLocations();
  }

  getLocations():void{
    this.locationsServices.getLocations()
      .subscribe(locations => {
        // console.log(locations);
        this.locationsSource = new MatTableDataSource(locations.reverse());
      }
    );
  }

}
