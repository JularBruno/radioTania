import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TrainingsService } from '../services/trainings.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BasesComponent } from '../bases/bases.component';
import { BaseService } from '../services/base.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss'],
  providers: [ TrainingsService ]
})
export class TrainingsComponent extends BasesComponent {

  itemSelected: any = {};
  closeResult: string;

  filesUrl: string = environment.filesUrl;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    public trainingsService: TrainingsService,
    private modalService: NgbModal
  ) {
    super(router, <BaseService>trainingsService, toastr);
  }

  getBaseURI() {
    return '/trainings';
  }

}
