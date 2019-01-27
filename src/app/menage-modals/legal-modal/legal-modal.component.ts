import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-legal-modal',
  templateUrl: './legal-modal.component.html',
  styleUrls: ['./legal-modal.component.scss']
})
export class LegalModalComponent implements OnInit {

  @Input() title = `Default Title`;
  @Input() documentName = `default document name`;

  constructor() { }

  ngOnInit() {}

}
