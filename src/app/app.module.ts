import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdSidenavModule, MdCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SessionService }  from './sessionService/session.service';
import { HomeComponent } from './home/home.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { StatusFilterPipe } from './status-filter/status-filter.pipe';
import { StatusSortingPipe } from './status-sorting-pipe/status-sorting.pipe';
import { PrioritySortingPipe } from './priority-sorting-pipe/priority-sorting.pipe';
import { IdSortingPipe } from './id-sorting-pipe/id-sorting.pipe';
import { fadeInOut} from './FadeInOutAnimation/fadeInOut'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTodoComponent,
    EditTodoComponent,
    StatusFilterPipe,
    StatusSortingPipe,
    PrioritySortingPipe,
    IdSortingPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MdSidenavModule,
    MdCardModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
