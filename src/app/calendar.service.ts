import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CalendarService {

  date=new Date();

  goToNextMonth() {
    alert('next')
  }

  goToPrevMonth() {
    alert('prev')
  }
}
