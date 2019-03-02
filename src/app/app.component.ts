import { Component } from '@angular/core';
import { AccountsService } from './account/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent {
  //declare empty accounts array
  accounts: {name: string, status: string} [] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {

    this.accounts = this.accountsService.accounts;
    
  }
}
