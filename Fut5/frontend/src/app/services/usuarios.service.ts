import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  selectedUsuario: Usuario;
  usuarios: Usuario[];
  readonly URL_API = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {
    this.selectedUsuario = new Usuario();
   }

  getUsuario() {
     return this.http.get(this.URL_API);
  }

  postUsuario(Usuario: Usuario){
    return this.http.post(this.URL_API, Usuario);
  }

  putUsuario(Usuario: Usuario){
    return this.http.put(this.URL_API + `/${Usuario._id}`, Usuario);
  }
  
  deleteUsuario(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
