import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Edo_Car_Hire';

  bootstrapScriptElement: HTMLScriptElement;
  glightboxScriptElement: HTMLScriptElement;
  isotopeScriptElement: HTMLScriptElement;
  swiperbundleScriptElement: HTMLScriptElement;
  validateScriptElement: HTMLScriptElement;
  mainScriptElement: HTMLScriptElement;

  constructor(){
    //Load javascript components to html body of components
    this.bootstrapScriptElement = document.createElement("script");
    this.bootstrapScriptElement.src = "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
    document.body.appendChild(this.bootstrapScriptElement);

    this.glightboxScriptElement = document.createElement("script");
    this.glightboxScriptElement.src = "./assets/vendor/glightbox/js/glightbox.min.js";
    document.body.appendChild(this.glightboxScriptElement);

    this.isotopeScriptElement = document.createElement("script");
    this.isotopeScriptElement.src = "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
    document.body.appendChild(this.isotopeScriptElement);

    this.swiperbundleScriptElement = document.createElement("script");
    this.swiperbundleScriptElement.src = "./assets/vendor/swiper/swiper-bundle.min.js";
    document.body.appendChild(this.swiperbundleScriptElement);

    this.validateScriptElement = document.createElement("script");
    this.validateScriptElement.src = "./assets/vendor/php-email-form/validate.js";
    document.body.appendChild(this.validateScriptElement);

    this.mainScriptElement = document.createElement("script");
    this.mainScriptElement.src = "./assets/js/main.js";
    document.body.appendChild(this.mainScriptElement);

 }
}
