import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  
  billingSource: any;

  constructor(private billingService : BillingService) { }
  
  displayedColumns: string[] = ['service', 'type', 'date', 'amount'];
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  ngOnInit(): void {
    this.billingService.getBilling()
      .subscribe(billing => {
        this.billingSource = new MatTableDataSource(billing);
      })
  }

}
