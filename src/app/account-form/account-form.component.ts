import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../service/account-service';
import { Account } from '../account/account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})

export class AccountFormComponent {

  account: Account;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService) {
    this.account = new Account();
  }

  onSubmit() {
    this.accountService.save(this.account).subscribe(() => this.gotoAccountList());
  }

  gotoAccountList() {
    this.router.navigate(['../accountList'])
  }
}
