import { of } from 'rxjs';
import { environment } from './../../environments/environment';
import { Animais, Animal } from './animais';
import { Observable, throwError } from 'rxjs';
import { TokenService } from './../autenticacao/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { catchError, mapTo } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';


const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  listaDoUsuario(nomeDoUsuario:string):Observable<Animais>{
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
  }


  buscaPorID(id:number):Observable<Animal>{
      return this.http.get<Animal>(`${API}/photos/${id}`);
    }

  excluiAnimal(id:number):Observable<Animal>{
      return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  curtir(id:number): Observable<boolean>{
    return this.http
    .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
    .pipe(
        mapTo(true),
        catchError((error)=> {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error);
      })
      );
  }
}


