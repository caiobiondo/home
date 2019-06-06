import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({

    selector: 'app-usuario-cadastro',
    templateUrl: './usuario-cadastro.component.html',
    styleUrls: ['../usuario.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {


   usuario: Usuario;
    constructor(private usuarioService:UsuarioService) { }

    ngOnInit() {
    }

     salvar() {
        this.usuarioService.salvar(this.usuario).subscribe(
           response => {
               console.log(response);
            alert("Salvo com sucesso")
           },
           error => {
               alert ("ERRO!")
           }
        )
        
    }
}