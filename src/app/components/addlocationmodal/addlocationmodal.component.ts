import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Location } from 'src/app/models/Locations';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-addlocationmodal',
  templateUrl: './addlocationmodal.component.html',
  styleUrls: ['./addlocationmodal.component.scss']
})
export class AddlocationmodalComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;
  fileAttr : string = 'Choose File';
  
  breakpoint!: number; 
  branchName!: string;
  licencesNumber!: number;
  enrolmentDate!:Date;
  locationForm!: FormGroup;
  wasFormChanged = false;
  modules!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private locationsService:LocationsService
  ) { 
    this.modules = fb.group({
      exams: false,
      monitoring: false,
      application_library: false
    });
  }

  ngOnInit(): void {
    this.locationForm = this.fb.group({
      IdProof: null,
      branchName: [this.branchName, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      licencesNumber: [this.licencesNumber, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      enrolmentDate:[this.enrolmentDate, null]
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
  }

  onAddCus(): void {
    this.markAsDirty(this.locationForm);
  }

  openDialog(): void {
    if(this.locationForm.dirty) {
      this.dialog.closeAll();

    } else {
      this.dialog.closeAll();
    }
  }

  onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      this.fileAttr += imgFile.target.files[0].name;
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  saveLocation(){
    // console.log(this.fileAttr);
    const newLocation : Location ={
      image :"https://lh3.googleusercontent.com/pw/AM-JKLU7h0rjOOsLE4nHg-suge0V9XU5DWQwfkF-GyLNzQu6H_EUHTyzmkshdUGsJhHJdM7d2DJ63CRP1QHba73KD_5yDeY2DYcKyfm3J777peRTfxBfvCiTxpTGBxBozfJixVTZIOoGc0un-aOgN8vf15nV=w31-h26-no?authuser=0",
      licences:this.locationForm.value.licencesNumber,
      name:this.locationForm.value.branchName,
      products:{
        applicationLibrary:this.modules.value.application_library,
        exams:this.modules.value.exams,
        monitoring:this.modules.value.monitoring
      },
      enrollmentDate:new Date(this.locationForm.value.enrolmentDate).getTime()/1000,
    }
    this.locationsService.addLocation(newLocation)
      .subscribe(location => 
        {
          // console.log("Location added", location);
          this.dialog.closeAll();
          window.location.reload();
        }
      );
  }

}