import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  // NOTE ActivatedRoute is the currently active route
  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // NOTE unlike router link; navigate method doesn't know the current route (default is the root route, which might not be desired behavior); need to pass second argument
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
