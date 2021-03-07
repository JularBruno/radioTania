import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateHeaderService } from '../services/update-header.service';
import { Subscription } from 'rxjs/Subscription';
// import { ToastrModule } from 'ngx-toastr/ngx-toastr';
import { environment } from '../../environments/environment';
import { Constants } from '../app.constants';
import { AdministratorService } from '../services/administrator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [AdministratorService, UpdateHeaderService]
})
export class LoginComponent implements OnInit {
  formObject: any = { value: null };
  isLoggedIn: boolean;
  subscriptionUpdateUserService: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    // public toastr: ToastrModule,
    public vcr: ViewContainerRef,
    public administratorService: AdministratorService,
    private sharedData: UpdateHeaderService
  ) {
    // this.toastr.setRootViewContainerRef(vcr);
    this.formObject = this.formBuilder.group({
      user: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
    this.subscriptionUpdateUserService = this.sharedData.currentIsLogin.subscribe(data => this.isLoggedIn = data);

  }

  ngOnInit() {

  }

  logForm(values) {
    console.log(JSON.stringify(values));
    const service = this.administratorService;

    service.login(values).then(data => {
      let response: any;
      response = data.json();
      console.log(response);
      if (!response.errors) {
        // this.showSuccess('Bienvenido');
        localStorage.setItem(Constants.STORAGE.user_id, response.user.id);
        localStorage.setItem(Constants.STORAGE.user, response.user.user);
        localStorage.setItem(Constants.STORAGE.password, response.user);
        this.sharedData.changeIsLogin(true);
        console.log(this.isLoggedIn, "sharedData")

        const self = this;
        // self.router.navigate(['/users']);

        let url: string = "https://radiotania.com/admin/audios";
        // let url: string = "http://localhost:4200/users";
        window.location.href = url;
        console.log(response);
      } else {
        console.log(response.errors[0].message);
        alert(response.errors[0].message);
      }
    })
      .catch(err => {
        // this.showError('Usuario no existente')
        console.log(err);
      })
  }

  // showSuccess(message) {
  //   this.toastr.success(message);
  // }
  // showError(message) {
  //   this.toastr.error(message);
  // }

}
