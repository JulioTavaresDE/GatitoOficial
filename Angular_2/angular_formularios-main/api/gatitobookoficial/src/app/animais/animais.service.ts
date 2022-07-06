import { environment } from './../../environments/environment';
import { Animais } from './animais';
import { Observable } from 'rxjs';
import { TokenService } from './../autenticacao/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  listaDoUsuario(nomeDoUsuario:string):Observable<Animais>{
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }
}


