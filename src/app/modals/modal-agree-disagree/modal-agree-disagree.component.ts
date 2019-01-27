import { Component, OnInit, Input, Output } from '@angular/core';
import { ModalCommunicationService } from '../../services/modal-communication-service/modal-communication.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-agree-disagree',
  templateUrl: './modal-agree-disagree.component.html',
  styleUrls: ['./modal-agree-disagree.component.scss']
})
export class ModalAgreeDisagreeComponent implements OnInit {

  @Input() title = `Default Title`;
 // @Input() documentName = `Default Document Name`;
  // @Output() hasAgreed = false;

  message: string;
  constructor(public activeModal: NgbActiveModal,
              private modalCommunicationService: ModalCommunicationService) { }

  ngOnInit() {
    this.modalCommunicationService.currentMessage
      .subscribe( message => this.message = message );
  }

  agree(): void {
    this.modalCommunicationService.changeMessage('true');
    this.activeModal.close();
  }

  close(): void {
    this.modalCommunicationService.changeMessage('false');
    this.activeModal.close();
  }
}
