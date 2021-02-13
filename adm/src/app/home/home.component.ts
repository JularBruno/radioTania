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

  formObject: any;
  filesUrl: string = environment.filesUrl;
  admUrl: string = environment.admUrl;
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
    this.oneComponent();
  }

  getBaseURI() {
    return '/events';
  }
  getBasesURI() {
    return '/events';
  }

  oneComponent() {
    console.log('oneComponent()');
    this.homesService.getAll({}).then(res => {
      console.log('res ', res);
      if(res.length === 0) {
        let values = {
          description: '',
          slideTitle: ''
        };

        this.logForm(values);
        
      } else {
        // window.location.href = this.admUrl + '/home/' + res[0].id;
        console.log('res[0] ', res[0]);
        this.getFormEdit(res[0]);
      }
    })

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
    this.editItem = item;
    this.imagesObject.logo = item.logo;
    this.imagesObject.slideImages = item.slideImages;

    return this.formBuilder.group({
      id: [item.id],
      description: [item.description],
      logo: [item.logo],
      slideTitle: [item.slideTitle],
      slideImages: [item.slideImages],
    });
  }

  logForm(values) { ///
    values.logo = this.imagesObject.logo;
    values.slideImages = this.imagesObject.slideImages;

    // super.logForm(values);
    this.homesService.update(values);
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
