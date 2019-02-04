import { Component, OnInit } from '@angular/core';
import { EventManagementService } from '../../services/event-management-service/event-management.service';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import { CalendarEvent} from '../../controllers/events/calendar-event.interface';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss']
})
export class VerticalTimelineComponent implements OnInit {

  calendarEvents: any[] = [];
  calendarJumps: any[] = [];

  constructor(private eventManagementService: EventManagementService,
              private _scrollToService: ScrollToService) {
  }

  ngOnInit() {
    this.retrieveEvents();
  }

  private retrieveEvents(): void {
    this.eventManagementService.getEvents()
      .subscribe(
        (results: any[]) => {
          this.calendarEvents = results;
          this.calendarJumps = results;
        },
        (error) => console.log(error),
        () => {
          console.log(this.calendarEvents)
        });
  }

  getImageLink(imageName: string): string {
    // console.log(imageName);
    let imagelink = 'http://cs1.menageadultclub.com:8080/calendar-service/api/CalendarEvents/getEventFlyer?imageName=' + imageName;
    // console.log(imagelink);
    return imagelink;
  }

  public jumpToEvent(eventId: any) {
    const node = document.getElementById(eventId.toString());

    scrollIntoView(node, {scrollMode: 'if-needed',
    block: 'nearest',
    inline: 'nearest'
    });
  }



}
