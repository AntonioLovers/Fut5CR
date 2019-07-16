import { Component, OnInit } from '@angular/core';

import {UsuariosService} from '../../services/usuarios.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

declare var M: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
  }

  addUsuario(form: NgForm){
    this.usuarioService.postUsuario(form.value)
    .subscribe(res=>{
     this.resetForm(form);
     M.toast({html:'Registrado correctamente'});
    });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }
  }

}
