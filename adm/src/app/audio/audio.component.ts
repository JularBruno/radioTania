import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { ToastrService } from 'ngx-toastr';
import { AudiosService } from '../services/audios.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  providers: [AudiosService]
})
export class AudioComponent extends BaseComponent {

  formObject: any;
  filesUrl: string = environment.filesUrl;
  editItem: any;
  audio: any;

  afuConfigThumb = {
    formatsAllowed: ".mp3,.wav",
    maxSize: "30",
    // multiple: true,
    uploadAPI: {
      // url:"http://34.95.164.216:3071/api/files/upload"
      url: environment.serverUrl + "/files/upload"
    },
    replaceTexts: {
      selectFileBtn: 'Seleccionar Archivo',
      uploadBtn: 'Subir audio',
      dragNDropBox: 'Arrastrar',
      attachPinBtn: 'Añadir archivos...',
      afterUploadMsg_success: 'Audio cargado con éxito!',
      afterUploadMsg_error: 'Ha ocurrido un error'
    }
  };

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public toastr: ToastrService,
    public audiosService: AudiosService,
    
  ) {
    super(router, formBuilder, route, toastr, <BaseService>audiosService);
    
  }

  getBaseURI() {
    return '/audios';
  }
  getBasesURI() {
    return '/audios';
  }

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      title: [null, Validators.required],
      description: [null, Validators.required],
      province: [null, Validators.required],
      audio: [null],
    })
  }

  getFormEdit(item) {
    this.editItem = item;
    this.audio = item.audio;
    return this.formBuilder.group({
      id: [item.id],
      title: [item.title],
      description: [item.description],
      province: [item.province],
      audio: [item.audio],
    });
  }

  responseFile(event) { //// ---- thumbnail
    console.log('event ', event);
    this.audio = JSON.parse(event.response).files[0];
  } 

  logForm(values) {
    values.audio = this.audio;
    super.logForm(values);
  }

  getAudio() {
    if(this.audio){
      let url = this.filesUrl + "/" + this.audio;
      console.log('url ', url);
      return url;
    } else{
       return null;
    }
  }
  
  getType() {
    let type: String;
    if(this.audio){
      if(this.audio.slice(-3) === 'mp3') {
        type = `audio/mpeg`;
      } else {
        type = `audio/wav`;
      }
      console.log('type ', type);
      return type;
    } else{
       return null;
    }
  }


}
