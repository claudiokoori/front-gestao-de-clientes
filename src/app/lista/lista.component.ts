import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnderecoService } from '../services/endereco.service';
import { Cliente } from '../services/models/cliente.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  clientes: Cliente[] = []
  
  constructor(private apiService: EnderecoService){}

  ngOnInit(): void {
    this.apiService.getAllContent().subscribe((data) => {
      this.clientes = data;
    })
  }
  submitForm(myform: NgForm){};
}
