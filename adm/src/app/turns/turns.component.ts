import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TurnsService } from '../services/turns.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BasesComponent } from '../bases/bases.component';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.scss'],
  providers: [ TurnsService ]
})
export class TurnsComponent extends BasesComponent {

  itemSelected: any = {};
  closeResult: string;
  itemsTurns: any;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    public turnsService: TurnsService,
    private modalService: NgbModal
  ) {
    super(router, <BaseService>turnsService, toastr);
    this.getTurns();
  }

  getBaseURI() {
    return '/turns';
  }

  getTurns() {
    this.turnsService.getAllAndPopulate({},['user', 'profesional']).then( (res: any) => {
      this.itemsTurns = res;
    });
  }
  
}
