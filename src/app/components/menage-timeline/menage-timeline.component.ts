import { Component, OnInit } from '@angular/core';
import { TimelineElement } from '../horizontal-timeline/timeline-element';

@Component({
  selector: 'app-menage-timeline',
  templateUrl: './menage-timeline.component.html',
  styleUrls: ['./menage-timeline.component.scss']
})
export class MenageTimelineComponent implements OnInit {

  name = 'Angular 6';
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;

  timeline: TimelineElement[] = [];

  constructor() { }

  ngOnInit() {
    this.load();
    console.log('menage-timeline');
    console.log(this.timeline);
  }

  load() {
    this.timeline = [];
    setTimeout(() => { // simulate delay
      this.timeline = [
        { caption: '16 Jan', date: new Date(2014, 0, 16), title: 'Horizontal Timeline', content: this.content },
        { caption: '28 Feb', date: new Date(2014, 1, 28), title: 'Status#1', content: this.content },
        { caption: '20 Mar', date: new Date(2014, 2, 20), selected: true, title: 'Status#2', content: this.content },
        { caption: '20 May', date: new Date(2014, 4, 20), title: 'Status#3', content: this.content },
        { caption: '09 Jul', date: new Date(2014, 6, 9), title: 'Status#4', content: this.content },
        { caption: '30 Aug', date: new Date(2014, 7, 30), title: 'Status#5', content: this.content },

        { caption: '15 Sep', date: new Date(2014, 8, 15), title: 'Status#6', content: this.content },
        { caption: '01 Nov', date: new Date(2014, 10, 1), title: 'Status#7', content: this.content },
        { caption: '10 Dec', date: new Date(2014, 11, 10), title: 'Status#8', content: this.content },
        { caption: '29 Jan', date: new Date(2015, 0, 19), title: 'Status#9', content: this.content },
        { caption: '3 Mar', date: new Date(2015, 2, 3), title: 'Status#9', content: this.content },
      ];
    }, 2000);
    console.log('menage-timeline');
    console.log(this.timeline);
  }

}
