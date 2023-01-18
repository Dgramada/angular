import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../account/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly accountUrl: string;

  constructor(private http: HttpClient) {
    this.accountUrl = 'http://localhost:8080/';
  }

  public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl + "accountList");
  }

  public save(account: Account) {
    return this.http.post<Account>(this.accountUrl + "createAccount", account);
  }
}
