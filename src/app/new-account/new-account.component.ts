import { Component } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { LoggingService } from './../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // 讓 Angular 辨識自寫的 service
  providers: [LoggingService]
})
export class NewAccountComponent {

  // Service 在  constructor 中建立
  constructor (private loggingService:  LoggingService, private accountsService: AccountsService) {
    // 訂閱 service 中的事件
    this.accountsService.statusUpdated.subscribe((status: string) => {alert('New Status: ' + status)});
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // 呼叫 loggingService 中 logStatusChange 函式
    // this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);

  }
}
