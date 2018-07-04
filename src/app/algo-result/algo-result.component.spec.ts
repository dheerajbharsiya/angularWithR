import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoResultComponent } from './algo-result.component';

describe('AlgoResultComponent', () => {
  let component: AlgoResultComponent;
  let fixture: ComponentFixture<AlgoResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
