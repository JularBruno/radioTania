import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit {

  iframeVisibility: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  hideIframe() {
    this.iframeVisibility = !this.iframeVisibility;
  }

}
