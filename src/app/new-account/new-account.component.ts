import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor( 
    private logger : LoggingService,
    private accountsService: AccountsService
    ) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAddAccount(accountName, accountStatus);
    this.logger.logStatusChange(accountStatus);
  }
}

