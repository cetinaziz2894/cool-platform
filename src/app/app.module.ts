import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {LayoutModule} from '@angular/cdk/layout';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CardsComponent } from './components/cards/cards.component';
import { BillingComponent } from './components/billing/billing.component';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LocationsComponent } from './components/locations/locations.component';
import { ModuleusageComponent } from './components/moduleusage/moduleusage.component';
import { AdministratorsComponent } from './components/administrators/administrators.component';
import { ContactsupportComponent } from './components/contactsupport/contactsupport.component';
import {MatInputModule} from '@angular/material/input';
import { LocationspageComponent } from './components/locationspage/locationspage.component';
import { LocationstableComponent } from './components/locationstable/locationstable.component';
import { HttpClientModule } from '@angular/common/http';
import { AddlocationmodalComponent } from './components/addlocationmodal/addlocationmodal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    CardsComponent,
    BillingComponent,
    CreditcardComponent,
    LocationsComponent,
    ModuleusageComponent,
    AdministratorsComponent,
    ContactsupportComponent,
    LocationspageComponent,
    LocationstableComponent,
    AddlocationmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    LayoutModule,
    MatTableModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddlocationmodalComponent]
})
export class AppModule { }
