import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtComponentComponent } from './firt-component.component';

describe('FirtComponentComponent', () => {
  let component: FirtComponentComponent;
  let fixture: ComponentFixture<FirtComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirtComponentComponent]
    });
    fixture = TestBed.createComponent(FirtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
