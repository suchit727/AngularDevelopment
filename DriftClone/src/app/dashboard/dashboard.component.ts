import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cards = [
    // { 'name':'LISTED PROPERTY',
    // 'number':26873,
    // 'percentage':'03%',
    // 'status':'This week'
    //  },
    //  { 'name':'SERVING CITIES',
    // 'number':384,
  
    // 'status':'7 new cities This week'
    //  },
    //  { 'name':'ONLINE VISITORS',
    // 'number': 84239,
    // 'percentage':'Avg. 327 ',
    // 'status':'visits daily'
    //  },
    //  { 'name':'ONLINE QUERIES',
    // 'number':87239,
    // 'percentage':'38%',
    // 'status':'past month'
    //  }
    { 'name':'LISTED PROPERTY',
    'number':26873,
    'percentage':'03%',
    'status':'This week',
    'width': '100%',
    'color': '#512da8'
     },
     { 'name':'SERVING CITIES',
    'number':384,
    'status':'7 new cities This week',
    'width': '40%',
    'color': 'orange'
     },
     { 'name':'ONLINE VISITORS',
    'number': 84239,
    'percentage':'Avg. 327 ',
    'status':'visits daily',
    'width': '90%',
    'color': '#52c41a'
     },
     { 'name':'ONLINE QUERIES',
    'number':87239,
    'percentage':'38%',
    'status':'past month',
    'width': '95%',
    'color': '#ff33cc'

     }
    ];
     
   containers=[{
    "imageUrl":"../../assets/users/amay.jpg"
   },{
    "imageUrl":"../../assets/users/jones.jpg"
   }]
   
}
