import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { map, shareReplay } from 'rxjs/operators';
import { Constants } from './app.constants';
import { Router } from '@angular/router';
import { UpdateHeaderService } from './services/update-header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ UpdateHeaderService ]
})
export class AppComponent {
  title = 'RadioTania';
  isLoggedIn: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  subscriptionUpdateUserService: Subscription;
  suscriptionLoggedInService: Subscription;
  
  constructor(
    private sharedData: UpdateHeaderService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
    ) {
      // this.subscriptionUpdateUserService = this.sharedData.currentIsLogin.subscribe(data => {
      //   this.isLoggedIn = data
      // });

      //
      let user = localStorage.getItem(Constants.STORAGE.user)
      console.log(' app user ', user)
      if(user) {
        console.log('is logged')
        this.isLoggedIn = false;
        console.log('this.isLoggedIn ', this.isLoggedIn)
        this.router.navigate(['/audios']);
      } else {
        this.isLoggedIn = true;
        this.router.navigate(['/login']);
      }

    }

  logout() {
    var self = this;
    localStorage.removeItem(Constants.STORAGE.user);
    localStorage.removeItem(Constants.STORAGE.password);
    localStorage.removeItem(Constants.STORAGE.user_id);
    this.sharedData.changeIsLogin(false);
    console.log(this.isLoggedIn,"sharedData")
    this.isLoggedIn = true;
    self.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.subscriptionUpdateUserService.unsubscribe();
    this.suscriptionLoggedInService.unsubscribe();
  }
}