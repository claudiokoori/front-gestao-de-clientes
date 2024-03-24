import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { Cliente } from '../services/models/cliente.interface';
import { NgForm } from '@angular/forms'; // Importe NgForm

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class Registro implements OnInit {
  cep: string = '';
  cliente: Cliente = {
    nomeCompleto: '',
    cpf: '',
    genero: 0,
    telefone: '',
    ativo: false,
    enderecoId: 0,
    endereco: {
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

  constructor(private apiService: EnderecoService) {}

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
    if (form.valid) {
      this.apiService.getPost(this.cliente).subscribe({
        next: (resposta) => {
        console.log('Sucesso!', resposta);
        alert('Cliente Registrado com Sucesso.');
        location.reload();
        
      },
      error: (erro) => {
        console.error('Erro:', erro);
        alert('Não foi possível registrar o cliente. CPF ou Telefone já existe no sistema.');
      }
      
    });

      console.log('Formulário válido');
      console.log(form.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
