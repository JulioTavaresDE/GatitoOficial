import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { NovoUsuaioService } from './novo-usuaio.service';
import { Injectable } from '@angular/core';
import { first, map,switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuaioService: NovoUsuaioService) { }

  // usuarioJaExiste(){
  //   return(control:AbstractControl) => {
  //     return control.valueChanges.pipe(
  //       switchMap((nomeUsuario) =>
  //         this.novoUsuaioService.verificaUsuarioExistente(nomeUsuario)
  //     ),
  //     map((usuarioExiste)=>
  //         usuarioExiste ? {usuarioExistente: true} : null
  //     ),
  //     first()
  //     );
  //   };
  // }

  // usuarioJaExiste() {
  //   return (control: AbstractControl) => {
  //     if (control && control.valueChanges) {
  //       return control.valueChanges.pipe(
  //         switchMap((nomeUsuario) =>
  //           this.novoUsuaioService.verificaUsuarioExistente(nomeUsuario)
  //         ),
  //         map((usuarioExiste) => usuarioExiste ? { usuarioExistente: true } : null),
  //         first()
  //       );
  //     } else {
  //       return null;
  //     }
  //   };
  // }

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges?.pipe(
        switchMap((nomeUsuario) =>
          this.novoUsuaioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }

}
