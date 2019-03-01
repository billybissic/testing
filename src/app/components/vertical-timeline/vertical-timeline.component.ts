import { Component, OnInit } from '@angular/core';
import { EventManagementService } from '../../services/event-management-service/event-management.service';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import { CalendarEvent} from '../../controllers/events/calendar-event.interface';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss']
})
export class VerticalTimelineComponent implements OnInit {

  calendarEvents: any[] = [];
  calendarJumps: any[] = [];

  eventManagementUrl = environment.calendarEventService;

  constructor(private eventManagementService: EventManagementService,
              private _scrollToService: ScrollToService) {
  }

  ngOnInit() {
    this.retrieveEvents();
    console.log(this.eventManagementUrl);
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
    /* get file ext */
    console.log("Image Name: " + imageName);
    let fileExt: string;
    let imageLink: string;

    fileExt = imageName.slice((imageName.lastIndexOf(".") - 1 >>> 0) + 2);
    if (fileExt.toLowerCase() === 'jpg' || fileExt.toLowerCase() === 'jpeg')
    {
      imageLink = this.eventManagementUrl + 'getEventFlyerJpeg?imageName=' + imageName;
      console.log(imageLink);
    }
    if (fileExt.toLowerCase() === 'png')
    {
      imageLink = this.eventManagementUrl + 'getEventFlyerPng?imageName=' + imageName;
      console.log(imageLink);
    }

    if (fileExt.toLowerCase() === 'gif')
    {
      imageLink = this.eventManagementUrl + 'getEventFlyerPng?imageName' + imageName;
      console.log(imageLink);
    }
    //console.log("File ext: " + imageName.slice((imageName.lastIndexOf(".") - 1 >>> 0) + 2));


    //let imagelink = 'http://cs1.menageadultclub.com:8080/calendar-service/api/CalendarEvents/getEventFlyer?imageName=' + imageName;
    // console.log(imagelink);
    return imageLink;
  }

  public jumpToEvent(eventId: any) {
    const node = document.getElementById(eventId.toString());

    scrollIntoView(node, {scrollMode: 'if-needed',
    block: 'nearest',
    inline: 'nearest'
    });
  }



}
