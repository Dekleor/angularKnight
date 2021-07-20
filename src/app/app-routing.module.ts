import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ListComponent} from './character/list/list.component';
import {StatsComponent} from './admin/stats/stats.component';
import {LogoffComponent} from './logoff/logoff.component';
import {RegisterComponent} from './register/register.component';
import {NpcComponent} from './npc/npc.component';
import {DeleteComponent} from './admin/delete/delete.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: StatsComponent},
  { path: 'character', component: ListComponent},
  { path: 'npc', component: NpcComponent },
  { path: 'logoff', component: LogoffComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'delete', component: DeleteComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

