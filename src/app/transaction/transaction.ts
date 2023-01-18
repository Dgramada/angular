import {Account} from "../account/account";

export class Transaction {
  id: number;
  date: Date;
  amount: bigint;
  recipientAccount: Account;
  senderAccount: Account;
}
