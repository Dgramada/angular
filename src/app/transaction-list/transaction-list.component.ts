import {Component, OnInit} from '@angular/core';
import { Transaction } from '../transaction/transaction';
import { TransactionService } from '../service/transaction-service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[];

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.transactionService.findAll().subscribe(data => {
      this.transactions = data;
    });
  }
}
