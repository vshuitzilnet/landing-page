import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AraModulesComponent } from './ara-modules.component';

describe('AraModulesComponent', () => {
  let component: AraModulesComponent;
  let fixture: ComponentFixture<AraModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AraModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AraModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
