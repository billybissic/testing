import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-warning-modal',
  templateUrl: './content-warning-modal.component.html',
  styleUrls: ['./content-warning-modal.component.scss']
})
export class ContentWarningModalComponent implements OnInit {

  @Input() title = `Default Title`;
  @Input() documentName = `default document name`;
  constructor() { }

  ngOnInit() {
  }

}
