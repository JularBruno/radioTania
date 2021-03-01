import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../app.constants';
import { environment } from '../../environments/environment';
import { forEach } from '@angular/router/src/utils/collection';
import { reduce } from 'rxjs/operator/reduce';
import { HomesService } from '../services/homes.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomesService]
})

export class HomeComponent implements OnInit {

  isMobileResolution: boolean;
  homeItem: any;
  filesUrl: string = environment.filesUrl;
  daySelected: String;
  daySchedule: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public homesService: HomesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }

    this.getHomeItem();
  }

  ngOnInit() {
  }

  getHomeItem() {
    this.homesService.getAll({}).then(res => {
      this.homeItem = res[0];
      this.dayClicked('monday');
    });
  }

  goToPage(page) {
    this.router.navigate(['/' + page]);
  }


  getImage(image) {
    if(image){
      let url = this.filesUrl + "/" + image;
      return url;
    } else{
       return null;
    }
  }

  dayClicked(day) {
    this.daySelected = day;
    this.daySchedule = this.homeItem.schedule[day];
  }


}


// trayectoria eventos capacitaciones videos  agenda cultural