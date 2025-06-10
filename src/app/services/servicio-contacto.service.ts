import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioContactoService {

  private apiUrl = 'http://localhost/backend/enviar.php';
  constructor(private http: HttpClient) { }

  enviarFormulario(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, {headers});
  }
}
