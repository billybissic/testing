import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalMessageComponent } from './legal-message.component';

describe('LegalMessageComponent', () => {
  let component: LegalMessageComponent;
  let fixture: ComponentFixture<LegalMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
