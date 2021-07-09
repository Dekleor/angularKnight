import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CharacterComponent} from './character/character/character.component';
import {ListComponent} from './character/list/list.component';
import {StatsComponent} from './admin/stats/stats.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: StatsComponent},
  { path: 'character', component: ListComponent},
  { path: 'underConstruction', component: HomeComponent },
  { path: 'logoff', component: HomeComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

