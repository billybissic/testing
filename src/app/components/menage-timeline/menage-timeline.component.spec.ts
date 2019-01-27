import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageTimelineComponent } from './menage-timeline.component';

describe('MenageTimelineComponent', () => {
  let component: MenageTimelineComponent;
  let fixture: ComponentFixture<MenageTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenageTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenageTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
