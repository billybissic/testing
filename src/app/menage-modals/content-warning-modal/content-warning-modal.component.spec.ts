import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWarningModalComponent } from './content-warning-modal.component';

describe('ContentWarningModalComponent', () => {
  let component: ContentWarningModalComponent;
  let fixture: ComponentFixture<ContentWarningModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentWarningModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWarningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
