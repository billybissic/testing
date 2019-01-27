import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersCardComponent } from './owners-card.component';

describe('OwnersCardComponent', () => {
  let component: OwnersCardComponent;
  let fixture: ComponentFixture<OwnersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
