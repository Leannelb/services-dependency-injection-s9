import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor( private logger : LoggingService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.logger.logStatusChange(accountStatus);
  }
}

