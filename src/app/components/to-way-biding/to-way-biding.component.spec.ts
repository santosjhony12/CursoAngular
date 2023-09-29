import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToWayBidingComponent } from './to-way-biding.component';

describe('ToWayBidingComponent', () => {
  let component: ToWayBidingComponent;
  let fixture: ComponentFixture<ToWayBidingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToWayBidingComponent]
    });
    fixture = TestBed.createComponent(ToWayBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
