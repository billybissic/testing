import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainersComponent } from './entertainers.component';

describe('EntertainersComponent', () => {
  let component: EntertainersComponent;
  let fixture: ComponentFixture<EntertainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
