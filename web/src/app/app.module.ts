import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule, ModalModule, TypeaheadModule, BsDropdownModule } from 'ngx-bootstrap';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopmenuComponent } from './shared/topmenu/topmenu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToastModule } from 'ng2-toastr';
import { NgAutonumericModule } from '@angularfy/ng-autonumeric';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { AudiosComponent } from './audios/audios.component';
import { VideosComponent } from './videos/videos.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventComponent },
  { path: 'audios', component: AudiosComponent },
  { path: 'audios/:category', component: AudioComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'videos/:category', component: VideoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopmenuComponent,
    FooterComponent,
    EventsComponent,
    EventComponent,
    AudiosComponent,
    VideosComponent,
    AudioComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule, HttpModule, LazyLoadImageModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    RecaptchaModule.forRoot(),
    BsDropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByJpPJ8Dvk1BbKdUoMru1NHWsyh9U0Sg4'
    }),
    NgAutonumericModule,
    AngularFontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
