import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [EventsService]
})
export class EventsComponent implements OnInit {

  isMobileResolution: boolean;
  events: any;
  filesUrl: string = environment.filesUrl;

  constructor(
    private router: Router,
    public eventsService: EventsService,
  ) { 
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    this.getEvents();
  }

  ngOnInit() {
  }

  getEvents() {
    this.eventsService.getAll({}).then(res => {
      console.log('res ', res);
      this.events = res;
    });
  }

  goToPage(page) {
    this.router.navigate(["/" + page])
  }

  goToEvent(eventId) {
    console.log(eventId)
    this.router.navigate(["events/" + eventId])
  }

  getImage(image) {
    if(image){
      let url = this.filesUrl + "/" + image;
      return url;
    } else{
       return null;
    }
  }

}
