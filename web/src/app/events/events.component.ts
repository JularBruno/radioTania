import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToPage(page) {
    this.router.navigate(["/" + page])
  }

  goToEvent(eventId) {
    // this.router.navigate(["/event/" + eventId])
    console.log(eventId)
    this.router.navigate(["/event"])
  }
}
