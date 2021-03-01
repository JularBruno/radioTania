import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { EventsService } from '../services/events.service';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [EventsService]
})
export class EventComponent implements OnInit {

  event: any = {};
  filesUrl: string = environment.filesUrl;

  isMobileResolution: boolean;

  imageViewImage="";
  imageViewHidden=true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public eventsService: EventsService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    
    this.getEvent();
  }

  ngOnInit() {
  }


  getEvent() {
    this.route.params.subscribe((params: any) => {
      this.eventsService.getById(params['id']).then(res => {
        console.log('res ', res);
        res.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res.videoUrl);
        this.event = res;
      });
    });
  }

  interactImage(clickedImage) {
    this.imageViewHidden = !this.imageViewHidden;
    this.imageViewImage = this.getImage(clickedImage);
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