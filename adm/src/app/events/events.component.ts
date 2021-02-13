import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from '../services/events.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BasesComponent } from '../bases/bases.component';
import { BaseService } from '../services/base.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [ EventsService ]
})
export class EventsComponent extends BasesComponent {

  itemSelected: any = {};
  closeResult: string;

  filesUrl: string = environment.filesUrl;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    public eventsService: EventsService,
    private modalService: NgbModal
  ) {
    super(router, <BaseService>eventsService, toastr);
  }

  getBaseURI() {
    return '/events';
  }

  getImage(image) {
    let src;
    // console.log('image ', image)
    if (image) {
      src = this.filesUrl + '/' + image;
      // console.log('src ', src)
    } else {
      src = 'assets/no-product.png';
    }
    return src;
  }
  
}
