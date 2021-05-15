import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) {

  }
  title = 'TestProj';
  loading = false;
  a = '';
  container1Loader = false;
  container2Loader = false;
  container3Loader = false;
  sayHi() {
    // alert('hiii');
    this.a = 'ghulam';
    this.router.navigate(['/SaayHio']);
  }

  // load loader
  loaderLoader() {
    this.loading = !this.loading;
    console.log(this.loading);
  }
  // stopLoader() {
  //   this.loading = false;
  //   console.log(this.loading);
  // }

  startLoader(containerValue: number) {
    switch (containerValue) {
      case 1:
        this.container1Loader = true;
        break;
      case 2:
        this.container2Loader = true;
        break;
      case 3:
        this.container3Loader = true;
        break;
    }
  }

  stopLoader(containerValue: number) {
    switch (containerValue) {
      case 1:
        this.container1Loader = false;
        break;
      case 2:
        this.container2Loader = false;
        break;
      case 3:
        this.container3Loader = false;
        break;
    }
  }
}
