import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import SummaryTicketDTO from '../shared/models/summary-ticket-dto';
import DetailTicketDTO from '../shared/models/detail-ticket-dto';
import { CreateTicketDTO } from '../shared/models/create-ticket-dto';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = '/api/ticket';

  constructor(private http: HttpClient) {}

  getAllSummaryTickets(): Observable<SummaryTicketDTO[]> {
    return this.http.get<SummaryTicketDTO[]>(this.apiUrl + '/summaryTickets');
  }

  getDetailTicketById(ticketId: number): Observable<DetailTicketDTO> {
    return this.http.get<DetailTicketDTO>(this.apiUrl + '/' + ticketId);
  }

  addTicket(createTicket: CreateTicketDTO): Observable<Response> {
    const createTicketJson = JSON.stringify(createTicket);

    console.log(createTicketJson);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<Response>(this.apiUrl, createTicketJson, httpOptions);
  }

  updateTicket(
    createTicket: CreateTicketDTO,
    ticketId: number
  ): Observable<Response> {
    const createTicketJson = JSON.stringify(createTicket);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.put<Response>(
      this.apiUrl + '/' + ticketId,
      createTicketJson,
      httpOptions
    );
  }

  deleteTicket(ticketId: number) {
    console.log('delete');

    this.http.delete<void>(this.apiUrl + '/delete/' + ticketId);
  }
}
