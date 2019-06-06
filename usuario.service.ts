import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Result, ResultListItem } from './usuario.model';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "https://optbackendtomcathml.nsb.com.br/basehml/admin/usuario/find"
  url1 = "https://optbackendtomcathml.nsb.com.br/basehml/admin/usuario/add"


  constructor(private httpCliente: HttpClient,
  ) { }

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.httpCliente.post<Usuario>(this.url1, usuario)
  }

  getUsuario(): Observable<ResultListItem> {
    return this.httpCliente.get<ResultListItem>(this.url, { params: { viewNumber: '1' } })

  }
}
