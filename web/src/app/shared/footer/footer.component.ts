import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit {

  isMobileResolution: boolean;
  iframeVisibility: boolean = true;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  hideIframe() {
    this.iframeVisibility = !this.iframeVisibility;
  }

}
