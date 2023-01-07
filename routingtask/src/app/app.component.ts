import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'routingtask';
  postsArray=[{title:"kunal",description:"kunal description"},
  {title : "suchit",description:"suchit description"}];
  postsArrayObserveers$=from(this.postsArray);
  timerSubscription!: Subscription;
  constructor(){
    this.postsArrayObserveers$.subscribe({
      next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>console.log("this is completed")
    });
   
  }
  ngOnInit(): void{
  //   const newObservable=new Observable<number>((observer)=>{
  //    for(let i=0;i<5;i++){
  //     observer.next(i);
  //    }
  //    observer.complete();
  // }
  
  // );
  
  // let observer= {
  //   next:(data:number)=>console.log(data),
  //   error:(error:string)=>console.log(error),
  //   complete:()=>console.log("Complete All Done")
  // }

  // newObservable.subscribe(observer);

  const newObservable=interval(1000);
  this.timerSubscription=newObservable.subscribe((data)=>{
    console.log(new Date().toLocaleTimeString()+ '' +data);

  });
  }
  cancelTimer(){
    console.log('cancel the observable')
    this.timerSubscription.unsubscribe();
  }
}
