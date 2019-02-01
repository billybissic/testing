import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faSnapchatSquare
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  show = false;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faSnapchatSquare = faSnapchatSquare;

  constructor() { }

  ngOnInit() {
  }
}
