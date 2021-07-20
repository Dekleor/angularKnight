import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './character/add/add.component';
import { ListComponent } from './character/list/list.component';
import { CharacterComponent } from './character/character/character.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { StatsComponent } from './admin/stats/stats.component';
import { NpcComponent } from './npc/npc.component';
import { LogoffComponent } from './logoff/logoff.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AddComponent,
    ListComponent,
    CharacterComponent,
    DeleteComponent,
    StatsComponent,
    NpcComponent,
    LogoffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
