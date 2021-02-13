import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { ToastrService } from 'ngx-toastr';
import { VideosService } from '../services/videos.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [VideosService]
})
export class VideoComponent extends BaseComponent {

  formObject: any;
  filesUrl: string = environment.filesUrl;
  editItem: any;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public toastr: ToastrService,
    public videosService: VideosService,
    public sanitizer: DomSanitizer
  ) {
    super(router, formBuilder, route, toastr, <BaseService>videosService);
    
  }

  getBaseURI() {
    return '/videos';
  }
  getBasesURI() {
    return '/videos';
  }

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      title: [null, Validators.required],
      description: [null, Validators.required],
      category: [null, Validators.required],
      videoUrl: [null, Validators.required],
    })
  }

  getFormEdit(item) {
    this.editItem = item;
    return this.formBuilder.group({
      id: [item.id],
      title: [item.title],
      description: [item.description],
      category: [item.category],
      videoUrl: [item.videoUrl],
    });
  }

  logForm(values) {
    super.logForm(values);
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
