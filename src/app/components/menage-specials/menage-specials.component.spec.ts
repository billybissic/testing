import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageSpecialsComponent } from './menage-specials.component';

describe('MenageSpecialsComponent', () => {
  let component: MenageSpecialsComponent;
  let fixture: ComponentFixture<MenageSpecialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenageSpecialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenageSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
