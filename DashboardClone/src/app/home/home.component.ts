import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [
          { 'name':'LISTED PROPERTY',
          'number':26873,
          'percentage':'03%',
          'status':'This week'
           },
           { 'name':'SERVING CITIES',
          'number':384,
          'percentage':'7 new cities',
          'status':'This week'
           },
           { 'name':'ONLINE VISITORS',
          'number': 84239,
          'percentage':'Avg. 327 ',
          'status':''
           },
           { 'name':'ONLINE QUERIES',
          'number':87239,
          'percentage':'38%',
          'status':'past month'
           },
         
  ]

  constructor(private breakpointObserver: BreakpointObserver) {}
}
