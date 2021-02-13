import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProfesionalsService } from '../services/profesionals.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BasesComponent } from '../bases/bases.component';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-profesionals',
  templateUrl: './profesionals.component.html',
  styleUrls: ['./profesionals.component.scss'],
  providers: [ ProfesionalsService ]
})
export class ProfesionalsComponent extends BasesComponent {

  itemSelected: any = {};
  closeResult: string;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    public profesionalsService: ProfesionalsService,
    private modalService: NgbModal
  ) {
    super(router, <BaseService>profesionalsService, toastr);
  }

  getBaseURI() {
    return '/profesionals';
  }
  
}
