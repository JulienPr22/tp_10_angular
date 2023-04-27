import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import TicketDTO from '../shared/models/ticket-dto';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = 'http://localhost:8080/ticket'; // l'url de votre ressource backend

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les données de la ressource backend
  getAllTickets(): Observable<TicketDTO> {
    return this.http.get<TicketDTO>(this.apiUrl);
  }

  // Méthode pour envoyer des données au backend
  envoyerDonnees(donnees: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, donnees);
  }
}
