import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministratorsService } from 'src/app/services/administrators.service';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.scss']
})
export class AdministratorsComponent implements OnInit {
  isMobil: boolean | undefined; 
  emailInput: any;

  constructor(private administratorsService: AdministratorsService,    private fb: FormBuilder) {
    this.getAdministrators();
   }

  administratorsSource : any;
  indexAreaStart = 0;
  indexAreaFinish = 5;
  filteredData : any;
  isNext:boolean = true;
  isPrev:boolean = false;
  wasFormChanged = false;

  contactForm!: FormGroup;


  ngOnInit(): void {
    this.contactForm = this.fb.group({
      emailInput: [this.emailInput, [Validators.required, Validators.email]]
    });
  }

  goNext():void {
    this.indexAreaStart += 5;
    this.indexAreaFinish +=5;
    if(this.indexAreaFinish > this.administratorsSource.length){
      this.filteredData = this.administratorsSource.slice(Math.max(this.administratorsSource.length - 5, 1));
      this.indexAreaStart = this.administratorsSource.length-5;
      this.indexAreaFinish = this.administratorsSource.length;
      this.isNext = false;
      if(!this.isPrev) {this.isPrev = true}
    }else{
      this.filteredData = this.administratorsSource.slice(this.indexAreaStart,this.indexAreaFinish);
      if(!this.isPrev) {this.isPrev = true}
    }
  }

  goPrev():void {
    this.indexAreaStart -= 5;
    this.indexAreaFinish -=5;
    if(this.indexAreaStart < 0){
      this.filteredData = this.administratorsSource.slice(0,5);
      this.indexAreaStart = 0;
      this.indexAreaFinish = 5;
      this.isPrev = false;
      if(!this.isNext) {this.isNext = true}
    }else{
      this.filteredData = this.administratorsSource.slice(this.indexAreaStart,this.indexAreaFinish);
      if(!this.isNext) {this.isNext = true}
    }
  }

  getAdministrators() {
    this.administratorsService.getAdministrators()
      .subscribe( administrators => {
        this.administratorsSource = administrators;
        this.filteredData = this.administratorsSource.slice(this.indexAreaStart,this.indexAreaFinish);
      })
  }
  
  onResize(event:any) {
    this.isMobil = (event.target.innerWidth <= 1100) ? true : false;
  }

  formChanged() {
    this.wasFormChanged = true;
  }

  invite(){
    if (!this.contactForm.controls.emailInput.hasError('pattern') && !this.contactForm.controls.emailInput.hasError('required')) {
      console.log(this.contactForm);
    }
  }
}

