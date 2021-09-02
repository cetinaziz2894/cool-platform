import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isLocation : boolean = false;
  isOverview : boolean = false;
  header!: { title: string; description: string; };
  route!: string;

  constructor(private observer: BreakpointObserver,private router: Router) {
  }

  goTo(item:string ):void {
    this.router.navigateByUrl(item);
 }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res: { matches: any; }) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  ngOnInit(): void {
  }

  isThisPage(item:string){
    const route = window.location.href.split('http://localhost:4200/')[1];
    if(route === item) {
      return 'active-button';
    }
    else return '';
  }
}
