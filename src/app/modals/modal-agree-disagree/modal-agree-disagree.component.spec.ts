import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgreeDisagreeComponent } from './modal-agree-disagree.component';

describe('ModalAgreeDisagreeComponent', () => {
  let component: ModalAgreeDisagreeComponent;
  let fixture: ComponentFixture<ModalAgreeDisagreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgreeDisagreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgreeDisagreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
