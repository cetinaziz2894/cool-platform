import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-moduleusage',
  templateUrl: './moduleusage.component.html',
  styleUrls: ['./moduleusage.component.scss']
})
export class ModuleusageComponent implements OnInit {

  constructor(private moduleService : ModuleService) { }

  modelUsageSource : any;
  exams : any;
  monitoring : any;
  applicationLibrary : any;

  ngOnInit(): void {
    this.moduleService.getModuleUsage()
      .subscribe(usage => {
        this.modelUsageSource = usage;
        this.exams = Math.ceil(this.modelUsageSource.exams / 1000);
        this.monitoring = Math.ceil(this.modelUsageSource.monitoring  / 1000);
        this.applicationLibrary = Math.ceil(this.modelUsageSource.applicationLibrary  / 1000);
      })
  }

  updateColor(progress:any) {
    if (progress<25){
       return 'primary';
    } else if (progress>70){
       return 'accent';
    } else {
      return 'warn';
    }
 }

}
