import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Task Master';
  isLoading = false;
  isEntityScreen = true;
  tabname= this.route.snapshot.routeConfig?.path;
  // subscrition: Subscription;
  

  constructor(private router: Router, private route: ActivatedRoute) {

    
    
  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnInit(): void {
    const url = "";
    this.router.navigate([url], {relativeTo: this.route});
  }
  
  navigation(url: string) {
    this.tabname = url;
    this.router.navigate([url], {relativeTo: this.route});
  }
  

  
  ngOnDestroy(): void {
    // this.subscrition.unsubscribe();
  }
}
