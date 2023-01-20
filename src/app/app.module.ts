import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountService } from './service/account-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountFormComponent,
    TransactionListComponent,
    TransactionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
