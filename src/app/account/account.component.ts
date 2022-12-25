import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // 移除 AccountsService 等於在跟 app module 用同一個 service 實例
  // 加入 AccountsService 等於 在這個 component 創建一個 service 實例
  // Service 在 Angular 可以讓 child components 延續使用
  // providers: [LoggingService],
  // providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor (private loggingService:  LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // emit event setup in service
    this.accountsService.statusUpdated.emit(status);
  }
}
