import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { ProfesionalComponent } from './profesional/profesional.component';
import { ProfesionalsComponent } from './profesionals/profesionals.component';
import { TurnsComponent } from './turns/turns.component';
import { AudioComponent } from './audio/audio.component';
import { AudiosComponent } from './audios/audios.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { HomesComponent } from './homes/homes.component';
import { TrainingComponent } from './training/training.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { VideoComponent } from './video/video.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: 'admin', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profesionals/:id', component: ProfesionalComponent },
  { path: 'profesionals', component: ProfesionalsComponent },
  { path: 'turns', component: TurnsComponent },
  //
  { path: 'audios', component: AudiosComponent },
  { path: 'audios/:id', component: AudioComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventComponent },
  { path: 'home', component: HomesComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'trainings/:id', component: TrainingComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'videos/:id', component: VideoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 