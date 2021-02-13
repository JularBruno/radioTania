import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { ToastrService } from 'ngx-toastr';
import { ProfesionalsService } from '../services/profesionals.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.scss'],
  providers: [ ProfesionalsService ]
})
export class ProfesionalComponent extends BaseComponent {

  formObject: any;
  filesUrl: string = environment.filesUrl;
  editItem: any;
  profileImage: String;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public toastr: ToastrService,
    public profesionalsService: ProfesionalsService,
    
  ) {
    super(router, formBuilder, route, toastr, <BaseService>profesionalsService);
    
  }

  getBaseURI() {
    return '/profesionals';
  }

  getBasesURI() {
    return '/profesionals'
  }

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      user: [null, Validators.required],
      password: [null, Validators.required],
      profileImage: [null],
      description: [null, Validators.required],
      especiality: [null, Validators.required],
      cronogram: [null, Validators.required],
      files: [null],
      state: [null, Validators.required],
      address: [null, Validators.required],
      city: [null, Validators.required],
      price: [null, Validators.required],
      cuit: [null, Validators.required],
      phone: [null, Validators.required],
      sex: [null, Validators.required],
      birthdate: [null, Validators.required],
      paymentMethod: [null, Validators.required],
      approved: [null],
    })
  }

  getFormEdit(item) {
    this.editItem = item;
    this.profileImage = this.gethtmlImage();
    return this.formBuilder.group({
      id: [item.id],
      name: [item.name],
      user: [item.user],
      password: [item.password],
      profileImage: [item.profileImage], //
      description: [item.description],
      especiality: [item.especiality],
      cronogram: [item.cronogram],
      files: [item.files], //
      state: [item.state],
      address: [item.address],
      city: [item.city],
      price: [item.price],
      cuit: [item.cuit],
      phone: [item.phone],
      sex: [item.sex],
      birthdate: [item.birthdate],
      paymentMethod: [item.paymentMethod],
      approved: [item.approved],
    });
  }

  logForm(values) {
    console.log('values ', values);
    super.logForm(values);
  }


  gethtmlImage(){
    if(this.editItem.profileImage){ 
      let url = this.filesUrl + "/" + this.editItem.profileImage;
      return url
    } else{
       return 'assets/no-product.png';
    }
  }

  openFile(item) {
    let url = this.filesUrl + "/" + item;
    window.open(url);
  }

}

