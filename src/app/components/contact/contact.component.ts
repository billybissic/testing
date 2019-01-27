import { Component, OnInit } from '@angular/core';
import {
  faFacebookSquare,
  faInstagram,
  faSnapchatSquare
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faSnapchatSquare = faSnapchatSquare;

  constructor() { }

  ngOnInit() {
  }
}
