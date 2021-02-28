import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { ToastrService } from 'ngx-toastr';
import { HomesService } from '../services/homes.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomesService]
})
export class HomeComponent extends BaseComponent {

  formObjectDay: any;
  dayImage: any;
  schedule: any = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  }

  formObject: any;
  filesUrl: string = environment.filesUrl;
  editItem: any;
  imagesObject: any = {
    logo: '',
    slideImages: '',
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
    public homesService: HomesService,
    public sanitizer: DomSanitizer
  ) {
    super(router, formBuilder, route, toastr, <BaseService>homesService);
    this.formDays();
  }

  formDays() {
    this.formObjectDay = this.formBuilder.group({
      timeFrom: [null],
      timeTo: [null],
      name: [null],
      image: [null],
    })
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
      description: [null],
      logo: [null],
      slideTitle: [null],
      slideImages: [null],
    })
  }  

  getFormEdit(item) { ///
    console.log('item ', item);
    this.imagesObject.logo = item.logo;
    this.imagesObject.slideImages = item.slideImages;
    if(item.schedule) {
      this.schedule = item.schedule;
    }

    return this.formBuilder.group({
      id: [item.id],
      description: [item.description],
      logo: [item.logo],
      slideTitle: [item.slideTitle],
      slideImages: [item.slideImages],
      schedule: [item.schedule],
    });
  }

  updateValues(values) { ///
    values.logo = this.imagesObject.logo;
    values.slideImages = this.imagesObject.slideImages;
    values.schedule = this.schedule
    this.homesService.update(values).then(() => {
      alert('Inicio de la página actualizado!');
    });
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

  responseFileDays(event) { //// ---- thumbnail
    this.dayImage = JSON.parse(event.response).files[0];
  } 

  newDay(values: any, day) {
    values.image = this.dayImage;
    console.log('values ', values);
    this.schedule[day].push(values);
    this.dayImage = '';
    console.log('this.schedule ', this.schedule);
  }

  deleteDay(item, day) {
    console.log('item, objectVar ', item, day);
    console.log('this.schedule ', this.schedule);
    const index = this.schedule[day].indexOf(item);
    console.log('index ', index);
    if (index > -1) {
      this.schedule[day].splice(index, 1);
    }
  }

}
