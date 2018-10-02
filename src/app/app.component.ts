import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
//import * as $ from 'jquery';
//import 'fullCalendar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menage-trois';

  faBars = faBars;
  faTwitter = faTwitter;
  faFB = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faInstagram = faInstagram;



  ngOnIt() {

   }
  
  constructor() {}

}
