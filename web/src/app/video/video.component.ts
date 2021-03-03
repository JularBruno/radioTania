import { Component, OnInit } from '@angular/core';
import { VideosService } from '../services/videos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [VideosService]
})
export class VideoComponent implements OnInit {
  isMobileResolution: boolean;
  videos: any;
  category: String = '';

  constructor(
    public videosService: VideosService,
    private route: ActivatedRoute
  ) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    this.getVideos()
  }

  ngOnInit() {
  }

  getVideos() {
    this.route.params.subscribe((params: any) =>{
      this.category = params['category'];
      this.videosService.getAll({category: params['category']}).then(res => {
        console.log('res ', res);
        this.videos = res;
      });
    });
  }

}
