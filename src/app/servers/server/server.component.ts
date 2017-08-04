import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  // needed to add Router to call the navigate method
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // data returned from a resolver will go into the data object
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );
    // NOTE commented out upon adding a resolver
    // added the '+' converts a string to a num
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   )
  }

  onEdit() {
    // cannot use absolute path:
    // this.router.navigate['/servers', this.server.id, 'edit']()
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
