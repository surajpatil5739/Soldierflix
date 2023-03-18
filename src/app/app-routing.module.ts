import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebseriesComponent } from './webseries/webseries.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"Home", component:HomeComponent},
  {path:"Webseries", component:WebseriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
