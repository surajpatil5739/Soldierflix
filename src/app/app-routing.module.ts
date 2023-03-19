import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebseriesComponent } from './webseries/webseries.component';
import { MoviesComponent } from './movies/movies.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {path:"", component:LogInComponent},
  {path:"Home", component:HomeComponent, canActivate: [AuthGuard] },
  {path:"Webseries", component:WebseriesComponent, canActivate: [AuthGuard] },
  {path:"Movies", component:MoviesComponent, canActivate: [AuthGuard] },
  {path:"Login", component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
