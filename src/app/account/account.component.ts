import { Component,  Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})

export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor( 
    public logger : LoggingService,
    private accountsService: AccountsService
    ) {
      this.accountsService.statusUpdated.subscribe(
        (status:string) => alert('New Status: ' + status)
      )

  }
 
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    // this.logger.logStatusChange(status)  }
    this.accountsService.statusUpdated.emit(status)
}
}