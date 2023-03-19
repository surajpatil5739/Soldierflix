import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebseriesComponent } from './webseries/webseries.component';
import { MoviesComponent } from './movies/movies.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path:"", component:LogInComponent},
  {path:"Home", component:HomeComponent},
  {path:"Webseries", component:WebseriesComponent},
  {path:"Movies", component:MoviesComponent},
  {path:"Login", component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
