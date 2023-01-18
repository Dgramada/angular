import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import {TransactionListComponent} from "./transaction-list/transaction-list.component";

const routes: Routes = [
  { path: 'accountList', component: AccountListComponent },
  { path: 'createAccount', component: AccountFormComponent },
  { path: 'transactionList', component: TransactionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
