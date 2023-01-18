import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../transaction/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly transactionUrl: string;

  constructor(private http: HttpClient) {
    this.transactionUrl = 'http://localhost:8080/';
  }

  public findAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl + "transactionList");
  }
}
