import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VideosService } from '../services/videos.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BasesComponent } from '../bases/bases.component';
import { BaseService } from '../services/base.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  providers: [ VideosService ]
})
export class VideosComponent extends BasesComponent {

  itemSelected: any = {};
  closeResult: string;

  filesUrl: string = environment.filesUrl;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    public videosService: VideosService,
    private modalService: NgbModal
  ) {
    super(router, <BaseService>videosService, toastr);
  }

  getBaseURI() {
    return '/videos';
  }

}
