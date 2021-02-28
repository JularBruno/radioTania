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
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss'],
  providers: [HomesService]
})
export class HomesComponent extends BaseComponent {

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public toastr: ToastrService,
    public homesService: HomesService,
    public sanitizer: DomSanitizer
    ) { 
      super(router, formBuilder, route, toastr, <BaseService>homesService);
      this.getHomes();
    }

  ngOnInit() {
  }

  getHomes() {
    this.homesService.getAll({}).then( res => {
      console.log('res ', res);
      if(res.length > 0) {
        console.log('hay homes');
        this.router.navigate(['home', res[0].id]);
      } else {
        console.log('no hay homes');
        this.homesService.create({}).then( res => {
          console.log('res ', res);
          this.router.navigate(['home', res.id]);
        })
      }
    });
  }

}

