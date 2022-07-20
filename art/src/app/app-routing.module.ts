import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home', component: HeroComponent},
  {path:'login', component: LoginComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
