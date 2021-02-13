import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AudiosService } from '../services/audios.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BasesComponent } from '../bases/bases.component';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.scss'],
  providers: [ AudiosService ]
})
export class AudiosComponent extends BasesComponent {

  itemSelected: any = {};
  closeResult: string;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    public audiosService: AudiosService,
    private modalService: NgbModal
  ) {
    super(router, <BaseService>audiosService, toastr);
  }

  getBaseURI() {
    return '/audios';
  }
  
}
