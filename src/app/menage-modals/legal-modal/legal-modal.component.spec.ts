import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalModalComponent } from './legal-modal.component';

describe('LegalModalComponent', () => {
  let component: LegalModalComponent;
  let fixture: ComponentFixture<LegalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
