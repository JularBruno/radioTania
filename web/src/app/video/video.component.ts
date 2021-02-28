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

  videos: any;
  category: String = '';

  constructor(
    public videosService: VideosService,
    private route: ActivatedRoute
  ) {
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
