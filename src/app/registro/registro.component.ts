import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { Cliente } from '../services/models/cliente.interface';
import { NgForm } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class Registro implements OnInit {
  cep: string = '';
  cliente: Cliente = {
    id: 0,
    nomeCompleto: '',
    cpf: '',
    genero: 0,
    telefone: '',
    ativo: false,
    enderecoId: 0,
    endereco: {
      id: 0,
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      ibge: '',
      gia: '',
      ddd: '',
      siafi: '',
      casa: '',
    },
  };

  timeout: any;

  constructor(private apiService: EnderecoService, private modalService: MdbModalService) {}

  ngOnInit(): void {}

  onInputChange(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.apiService.getCep(this.cep).subscribe((data) => {
        this.cliente.endereco = data;
      });
    }, 1000);
  }

  submitForm(form: NgForm) {
    this.cliente.endereco.id = this.cliente.enderecoId;
    if (form.valid) {
      this.apiService.getPost(this.cliente).subscribe({
        next: (resposta) => {
        console.log('Sucesso!', resposta);
        this.openModal();
      },
      error: (erro) => {
        console.error('Erro:', erro);
        alert('Não foi possível registrar o cliente. CPF ou Telefone já existe no sistema.');
      }
      
    });
    } else {
      console.log('Formulário inválido');
    }
 }

 openModal(): void {
  const modalRef = this.modalService.open(ModalComponent, { ignoreBackdropClick: true });
  modalRef.component.modalHeader = 'modal-header bg-primary text-white'
  modalRef.component.title = 'Sucesso';
  modalRef.component.body = 'Cliente Registrado Com Sucesso';
  modalRef.component.action = () => { location.reload() }
  modalRef.component.saveButtonLabel = 'Ok'
  modalRef.component.botaoDiretoClass = 'btn btn-primary'
  modalRef.component.botaoEsquerdo = false;
}
  
}
