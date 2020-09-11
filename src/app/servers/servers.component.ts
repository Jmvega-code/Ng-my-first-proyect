import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
/*   template: `
  <app-server></app-server>
  <app-server></app-server>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  userName = '';
  userCreationStatus = '';
  serverCreated = false;
  servers = [];
  displayToggle = false;
  clicks = 0;
  clickArray = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = event.target['value'];
  }



  onCreateUser() {
    this.userCreationStatus = 'Nuevo usuario nombre: ' + this.userName;
  }

  onUpdateUserName(event: Event) {
    this.userName = event.target['value'];
  }


  onClickDisplay() {
    this.clicks += 1;
    this.clickArray.push(this.clicks);
    this.displayToggle = this.displayToggle == true ? false : true;
  }


}
