import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../services/models/cliente.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent implements OnInit {
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


  constructor(private apiService: ClienteService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const clienteId = +params['id'];

      this.apiService.getCliente(clienteId).subscribe({
        next: (data) => {
          this.cep = data.endereco.cep;
          this.cliente = data;
          console.log("Cliente obtido.", this.cliente);
        },
        error: (erro) => {
          console.error('Erro:', erro);
          console.log("Não foi possível obter o Cliente.");
        }
      })
    })


  }

  onInputChange(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  
    this.timeout = setTimeout(() => {
      const endereco = this.apiService.getCep(this.cep);
      endereco.subscribe((data) => {
        if (this.cliente) {
          data.id = this.cliente.enderecoId;
          this.cliente.endereco = data;
          console.log("input change - ENDERECO", endereco)
          console.log("Esse aqui é o teste e cliente", this.cliente)
        }
      });
    }, 1000);
    
  }
  
  submitForm(form: NgForm) {
    
    if(form.valid && this.cliente){
      this.apiService.updateCliente(this.cliente.id, this.cliente).subscribe({
        next: () => {
  
          console.log("Cliente atualizado com sucesso.", this.cliente);
        },
        error: (erro) => {
          console.error('Erro', erro);
          console.log("Não foi possível atualiar o cliente.");
        }
      })
    }
  }

  
}
