import { Injectable } from "@angular/core";


// angular 現在建議不論會不會需要注入其他 service 都使用 @Injectable()
@Injectable()
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}