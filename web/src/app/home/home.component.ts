import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';
import { environment } from '../../environments/environment';
import { forEach } from '@angular/router/src/utils/collection';
import { reduce } from 'rxjs/operator/reduce';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})

export class HomeComponent implements OnInit {

  isMobileResolution: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  ngOnInit() {
  }

  goToPage(page) {
    this.router.navigate(['/' + page]);
  }
}


// trayectoria eventos capacitaciones videos  agenda cultural