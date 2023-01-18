import { Component, OnInit } from '@angular/core';
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

  constructor(private accountService: AccountService) {
  }

  public getSubList(nameSubstring: string): void {
    if (!nameSubstring) {
      this.accountsSublist = this.accounts;
    } else {
      this.accountsSublist = this.accounts.filter((account) => account.name.includes(nameSubstring))
    }
  }

  ngOnInit() {
    this.accountService.findAll().subscribe(data => {
      this.accounts = data;
      this.accountsSublist = this.accounts;
    });
  }
}
