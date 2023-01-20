import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../service/transaction-service';
import { Transaction } from '../transaction/transaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})

export class TransactionFormComponent {

  transaction: Transaction;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService) {
    this.transaction = new Transaction();
  }

  onSubmit() {
    this.transactionService.save(this.transaction).subscribe(() => this.gotoTransactionList());
  }

  gotoTransactionList() {
    this.router.navigate(['../transactionList'])
  }
}
