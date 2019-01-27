import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainerCardComponent } from './entertainer-card.component';

describe('EntertainerCardComponent', () => {
  let component: EntertainerCardComponent;
  let fixture: ComponentFixture<EntertainerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
