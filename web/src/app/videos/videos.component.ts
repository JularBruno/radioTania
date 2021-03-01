import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

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

  goToPage(category) {
    this.router.navigate(['videos', category]);
  }

}
