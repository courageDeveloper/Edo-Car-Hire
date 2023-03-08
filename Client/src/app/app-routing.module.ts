import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio-details', component: PortfolioDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
