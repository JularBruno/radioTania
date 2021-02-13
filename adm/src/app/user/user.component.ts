import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent extends BaseComponent {

  formObject: any;
  filesUrl: string = environment.filesUrl;
  editItem: any;
  profileImage: String;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public toastr: ToastrService,
    public userService: UserService,
    
  ) {
    super(router, formBuilder, route, toastr, <BaseService>userService);
    
  }

  getBaseURI() {
    return '/users';
  }
  getBasesURI() {
    return '/users'
  }

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      user: [null, Validators.required],
      password: [null, Validators.required],
      address: [null, Validators.required],
      city: [null, Validators.required],
      phone: [null, Validators.required],
      profileImage: [null],
      sex: [null, Validators.required],
      birthdate: [null, Validators.required],
      codeAmount: [null, Validators.required],
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
      address: [item.address],
      city: [item.city],
      phone: [item.phone],
      profileImage: [item.profileImage],
      sex: [item.sex],
      birthdate: [item.birthdate],
      codeAmount: [item.codeAmount],
    });
  }

  logForm(values) {
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

}

