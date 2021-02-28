import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpModule } from '@angular/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { BaseComponent } from './base/base.component';
import { BasesComponent } from './bases/bases.component';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { QuillModule } from 'ngx-quill';
import { ProfesionalsComponent } from './profesionals/profesionals.component';
import { ProfesionalComponent } from './profesional/profesional.component';
import { TurnsComponent } from './turns/turns.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { AudiosComponent } from './audios/audios.component';
import { AudioComponent } from './audio/audio.component';
import { VideosComponent } from './videos/videos.component';
import { VideoComponent } from './video/video.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingComponent } from './training/training.component';
import { HomeComponent } from './home/home.component';
import { HomesComponent } from './homes/homes.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserComponent,
    BaseComponent,
    BasesComponent,
    ProfesionalsComponent,
    ProfesionalComponent,
    TurnsComponent,
    EventsComponent,
    EventComponent,
    AudiosComponent,
    AudioComponent,
    VideosComponent,
    VideoComponent,
    TrainingsComponent,
    TrainingComponent,
    HomeComponent,
    HomesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpModule,
    AngularFileUploaderModule,
    MatTableModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    QuillModule.forRoot(),
  ],
  exports:[
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
