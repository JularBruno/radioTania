import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.scss']
})
export class AudiosComponent implements OnInit {
  isMobileResolution: boolean;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  goToPage(province) {
    this.router.navigate(['audios', province]);
  }

}
