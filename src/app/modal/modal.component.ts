import { Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() modalHeader: string = '';
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() closeButtonLabel: string = '';
  @Input() saveButtonLabel: string = '';
  @Input() botaoEsquerdo: boolean = true;
  @Input() botaoDiretoClass: string = 'botaoDireto';
  @Input() onSave: () => void = () => {};


  constructor(public modalRef: MdbModalRef<ModalComponent>) {}

  closeModal() {
    this.modalRef.close();
  }

  action() {
    
  } 
}
