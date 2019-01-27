import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import {SimpleContent} from '../../../controllers/content/simple-content';
import { SimpleContentService } from '../../../services/content-management-service/simple-content.service';

@Component({
  selector: 'app-legal-message',
  templateUrl: './legal-message.component.html',
  styleUrls: ['./legal-message.component.scss']
})
export class LegalMessageComponent implements OnInit, AfterContentInit {

  @Input() title = `default title`;
  @Input() documentName = `default document name`;
  document: SimpleContent = null;

  constructor(private simpleContentService: SimpleContentService) { }

  ngOnInit() {}

  ngAfterContentInit() {
    this.simpleContentService.getSimpleContentByDocumentName(this.documentName)
      .subscribe(
        (results: SimpleContent) => {
          this.document = results;
          console.log(this.document);
        },
        (error) => console.log(error)
      );
    console.log(this.document.documentContent);
  }

}
