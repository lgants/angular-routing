import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// rxjs contains all the observables
// import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  // paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // snapshot is fine for first initialization, but another approach is needed to react to changes emenating from/directing to the same component
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // params is an observable, which is a featured added by a thrid-party package, but heavily used by angular, that make it easy to work with async tasks
    // need to use subscribe whenever route params change (i.e. after initialization)
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      )
  }

  // angular does this automatically, but better to be explicit
  ngOnDestroy() {
    // this.paramsSubscription.unsubscribe()
  }

}
