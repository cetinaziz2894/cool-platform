import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationspageComponent } from './components/locationspage/locationspage.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '',   redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: MainComponent },
  { path: 'locations', component: LocationspageComponent },
  { path: '**', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
