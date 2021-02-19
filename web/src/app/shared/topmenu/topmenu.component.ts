import { Component, OnInit, Renderer2, Renderer, ViewChild } from '@angular/core';
import { Constants } from '../../app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
})
export class TopmenuComponent implements OnInit {

  @ViewChild('userUpdate') userUpdate: any;

  isMobileResolution: boolean;

  show: any;
  loading = false;
  scrollPosition: number;
  formObject: any = {};
  canSend = false;
  iframeVisibility: boolean = true;

  user: any;
  isUser: boolean = false;

  // userSharedData: any;

  constructor(
    private router: Router,
  ) {
    console.log('user', this.user)
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    //
    // this.sharedData.currentIsLogin.subscribe(data => this.userSharedData = data);
  }

  ngOnInit() {

    // console.log('userSharedData ------- ', this.userSharedData)
    let storageUser = localStorage.getItem(Constants.STORAGE.user);

    if (storageUser) {
      console.log('there is user on top menu');
      this.user = localStorage.getItem(Constants.STORAGE.user);
      console.log('USERR PA', this.user)
      this.isUser = true;
    }
  }


  toggleCollapse() {
    this.show = !this.show;
  }

  logOut() {
    localStorage.removeItem(Constants.STORAGE.user);
    localStorage.removeItem(Constants.STORAGE.user_id);
    // this.sharedData.changeIsLogin(false);
    // this.sharedData.updatedDataSelection("123");
    this.isUser = false;
    this.router.navigateByUrl('/login');
    this.ngOnInit();
  }

  goToCarrito() {
    this.router.navigate(["/carrito"])
  }

  goToRecords() {
    this.router.navigate(["/records"])
  }

  hideIframe() {
    this.iframeVisibility = !this.iframeVisibility;
  }
}
