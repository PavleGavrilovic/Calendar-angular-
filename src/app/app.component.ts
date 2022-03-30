import { Component, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  arrowUrlPath: string = '../assets/images/white-down-arrow-png-2.png';
  date = new Date();
  currentDateNum:number=this.date.getDate();
  currentMonth:number=this.date.getMonth();
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  weekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  fullDate: string = this.date.toDateString();
  month: string = this.months[this.date.getMonth()];
  year: number = this.date.getFullYear();

  lastDay:number=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate();
  firstDayIndex=this.date.getDay();
  prevDays:number[]=[];
  prevLastDay:number=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();
  lastDayIndex:number=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDay();
  nextDays:number=7-this.lastDayIndex-1;
  nextDayArray:number[]=[];

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {

    this.date.setDate(1)

    this.firstDayIndex=this.date.getDay()

    for(let j=this.firstDayIndex;j>0;j--) {
      this.prevDays.push(this.prevLastDay-j+1);
    }

    for(let k=1;k<=this.nextDays;k++) {
      this.nextDayArray.push(k)
    }
  }

  monthUp() {
    this.nextDayArray=[];
    this.prevDays=[]
    this.currentMonth=this.currentMonth+1;
    this.date.setMonth(this.currentMonth);
    this.lastDayIndex=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDay();
    console.log(this.lastDayIndex);

    this.firstDayIndex=this.date.getDay()
    this.prevLastDay=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();

    for(let j=this.firstDayIndex;j>0;j--) {
      this.prevDays.push(this.prevLastDay-j+1);
    }

    this.nextDays=7-this.lastDayIndex-1;
    for(let k=1;k<=this.nextDays;k++) {
      this.nextDayArray.push(k)
    }

    this.fullDate=this.date.toDateString();
    this.month=this.months[this.date.getMonth()];
    this.year=this.date.getFullYear();
    this.lastDay=new Date(this.date.getFullYear(),this.currentMonth+1,0).getDate();


  }

  monthDown() {
    this.prevDays=[];
    this.nextDayArray=[];
    this.currentMonth=this.currentMonth-1;
    this.date.setDate(1);
    this.date.setMonth(this.date.getMonth()-1);


    this.firstDayIndex=this.date.getDay()
    this.prevLastDay=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();

    for(let j=this.firstDayIndex;j>0;j--) {
      this.prevDays.push(this.prevLastDay-j+1);
    }

    this.nextDays=7-this.lastDayIndex-1;
    for(let k=1;k<=this.nextDays;k++) {
      this.nextDayArray.push(k)
    }

    this.fullDate=this.date.toDateString();
    this.month=this.months[this.date.getMonth()];
    this.year=this.date.getFullYear();
    this.lastDay=new Date(this.date.getFullYear(),this.currentMonth+1,0).getDate();
  }
}
