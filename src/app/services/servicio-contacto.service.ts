import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioContactoService {

  private apiUrl = 'https://backendcontacto.onrender.com/enviar.php';
  constructor(private http: HttpClient) { }

  enviarFormulario(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, JSON.stringify(data), {headers, responseType: 'text'});
  }
}
