import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { Cliente } from '../services/models/cliente.interface';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  clientes: Cliente[] = []
  
  constructor(private apiService: EnderecoService,private modalService: MdbModalService){}

  ngOnInit(): void {
    this.apiService.getAllContent().subscribe((data) => {
      this.clientes = data;
    })
  }

  openModal(clienteId: number): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.component.modalHeader = 'modal-header bg-danger text-white';
    modalRef.component.title = 'Exclusão de Cliente';
    modalRef.component.body = 'Você tem certeza que deseja excluir esse cliente?';
    modalRef.component.action = () => { 
      this.apiService.deleteCliente(clienteId).subscribe({
        next: (data) => {
          console.log('Cliente excluído com sucesso');
          this.updateClientList();
      },
        error: (error) => {
          console.error('Erro:', error);
        
      }
      });
      location.reload();
    }
    modalRef.component.closeButtonLabel = 'Cancelar'
    modalRef.component.saveButtonLabel = 'Excluir'
    modalRef.component.botaoDiretoClass = 'btn btn-danger'
  }

  updateClientList(): void {
    this.apiService.getAllContent().subscribe((data) => {
      this.clientes = data;
    });
}
}
