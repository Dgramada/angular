import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../account/account';
import { AccountService } from '../service/account-service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];
  accountsSublist: Account[] = [];
  searchWord: string;

  constructor(private accountService: AccountService) {
  }

  @Output() searchCriteria = new EventEmitter<string>();
  getSublist(): void {
    this.searchCriteria.emit(this.searchWord);
    if (!this.searchWord) {
      this.accountsSublist = this.accounts;
    } else {
      this.accountsSublist = this.accounts.filter((account) => account.name.includes(this.searchWord))
    }
  }

  resetSublist(): void {
    this.searchWord = '';
    this.accountsSublist = this.accounts;
  }

  ngOnInit() {
    this.accountService.findAll().subscribe(data => {
      this.accounts = data;
      this.accountsSublist = this.accounts;
    });
  }
}
