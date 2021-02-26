import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditOptionComponent } from './credit-option.component';

describe('CreditOptionComponent', () => {
  let component: CreditOptionComponent;
  let fixture: ComponentFixture<CreditOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
