import { Component, OnInit } from '@angular/core';
import { AudiosService } from '../services/audios.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  providers: [AudiosService]
})

export class AudioComponent implements OnInit {

  audios: any;
  province: String;
  filesUrl: string = environment.filesUrl;
  
  constructor(
    public audiosService: AudiosService,
    private route: ActivatedRoute
  ) {
    this.getAudios();
   }

  ngOnInit() {
    
  }

  getAudios() {
    this.route.params.subscribe((params: any) =>{
      this.province = params['province'];
      this.audiosService.getAll({province: params['province']}).then(res => {
        console.log('res ', res);
        this.audios = res;
      });
    });
  }


  getAudio(audio) {
    if(audio){
      let url = this.filesUrl + "/" + audio;
      return url;
    } else{
       return null;
    }
  }
  
  getType(audio) {
    let type: String;
    if(audio){
      if(audio.slice(-3) === 'mp3') {
        type = `audio/mpeg`;
      } else {
        type = `audio/wav`;
      }
      return type;
    } else{
       return null;
    }
  }

}
