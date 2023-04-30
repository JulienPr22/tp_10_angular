import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import TicketDTO from '../shared/models/detail-ticket-dto';
import SummaryTicketDTO from '../shared/models/summary-ticket-dto';
import DetailTicketDTO from '../shared/models/detail-ticket-dto';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = '/api/ticket';

  constructor(private http: HttpClient) {}

  getTicketById(ticketId: number): Observable<DetailTicketDTO> {
    return this.http.get<DetailTicketDTO>(this.apiUrl + '/' + ticketId);
  }

  getAllSummaryTickets(): Observable<SummaryTicketDTO[]> {
    return this.http.get<SummaryTicketDTO[]>(this.apiUrl + '/summaryTickets');
  }

  getDetailTicketById(ticketId: number): Observable<DetailTicketDTO> {
    return this.http.get<DetailTicketDTO>(this.apiUrl + '/' + ticketId);
  }
}
