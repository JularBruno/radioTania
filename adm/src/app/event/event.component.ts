import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from '../services/events.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [EventsService]
})
export class EventComponent extends BaseComponent {

  formObject: any;
  filesUrl: string = environment.filesUrl;
  editItem: any;
  imagesObject: any = {
    miniature: '',
    firstImage: '',
    logo: '',
    secondImage: '',
    photosRow: '',
    carrouselPhotos: '',
    bottomImages: '',
  };

  afuConfigThumbMultiple = {
    formatsAllowed: ".jpg,.jpeg,.png",
    maxSize: "30",
    multiple: true,
    uploadAPI: {
      url: environment.serverUrl + "/files/upload"
    },
    replaceTexts: {
      selectFileBtn: 'Seleccionar Archivo',
      uploadBtn: 'Subir imagen',
      dragNDropBox: 'Arrastrar',
      attachPinBtn: 'Añadir archivos...',
      afterUploadMsg_success: 'Imágen cargada con éxito!',
      afterUploadMsg_error: 'Ha ocurrido un error'
    }
  };

  afuConfigThumb = {
    formatsAllowed: ".jpg,.jpeg,.png",
    maxSize: "30",
    uploadAPI: {
      url: environment.serverUrl + "/files/upload"
    },
    replaceTexts: {
      selectFileBtn: 'Seleccionar Archivo',
      uploadBtn: 'Subir imagen',
      dragNDropBox: 'Arrastrar',
      attachPinBtn: 'Añadir archivos...',
      afterUploadMsg_success: 'Imágen cargada con éxito!',
      afterUploadMsg_error: 'Ha ocurrido un error'
    }
  };

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public toastr: ToastrService,
    public eventsService: EventsService,
    public sanitizer: DomSanitizer
  ) {
    super(router, formBuilder, route, toastr, <BaseService>eventsService);

  }

  getBaseURI() {
    return '/events';
  }
  getBasesURI() {
    return '/events';
  }

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      miniature: [null],
      resume: [null, Validators.required],
      title: [null, Validators.required],
      firstImage: [null],
      description: [null],
      logo: [null],
      secondImage: [null],
      titleVideo: [null],
      videoUrl: [null],
      titlePhotos: [null],
      photosRow: [null],
      titleCarrousel: [null],
      carrouselPhotos: [null],
      titleLink: [null],
      link: [null],
      linkText: [null],
      textBottom: [null],
      bottomImages: [null],
    })
  }

  getFormEdit(item) {
    this.editItem = item;
    this.imagesObject.miniature = item.miniature;
    this.imagesObject.firstImage = item.firstImage;
    this.imagesObject.logo = item.logo;
    this.imagesObject.secondImage = item.secondImage;
    this.imagesObject.photosRow = item.photosRow;
    this.imagesObject.carrouselPhotos = item.carrouselPhotos;
    this.imagesObject.bottomImages = item.bottomImages;
    return this.formBuilder.group({
      id: [item.id],
      miniature: [item.miniature],
      resume: [item.resume],
      title: [item.title],
      firstImage: [item.firstImage],
      description: [item.description],
      logo: [item.logo],
      secondImage: [item.secondImage],
      titleVideo: [item.titleVideo],
      videoUrl: [item.videoUrl],
      titlePhotos: [item.titlePhotos],
      photosRow: [item.photosRow],
      titleCarrousel: [item.titleCarrousel],
      carrouselPhotos: [item.carrouselPhotos],
      titleLink: [item.titleLink],
      link: [item.link],
      linkText: [item.linkText],
      textBottom: [item.textBottom],
      bottomImages: [item.bottomImages],
    });
  }

  logForm(values) {
    values.miniature = this.imagesObject.miniature;
    values.firstImage = this.imagesObject.firstImage;
    values.logo = this.imagesObject.logo;
    values.secondImage = this.imagesObject.secondImage;
    values.photosRow = this.imagesObject.photosRow;
    values.carrouselPhotos = this.imagesObject.carrouselPhotos;
    values.bottomImages = this.imagesObject.bottomImages;
    super.logForm(values);
  }

  gethtmlImage(image){
    let url = this.filesUrl + "/" + image;
    return url;
  }
  
  responseFile(event, objectVar, multiple) { //// ---- thumbnail
    if(multiple) {
      this.imagesObject[objectVar] = JSON.parse(event.response).files;
    } else {
      this.imagesObject[objectVar] = JSON.parse(event.response).files[0];
    }
  } 

  deleteImage(image, objectVar) {
    const index = this.imagesObject[objectVar].indexOf(image);
    if (index > -1) {
      this.imagesObject[objectVar].splice(index, 1);
    }
  }

  getVideo() {
    if(this.formObject.value.videoUrl !== null) {
      let url = this.sanitizer.bypassSecurityTrustResourceUrl(this.formObject.value.videoUrl);
      return url;
    } else {
      return null;
    }
  }

}
