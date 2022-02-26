import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenProductDetailsComponent } from './men-product-details.component';

describe('MenProductDetailsComponent', () => {
  let component: MenProductDetailsComponent;
  let fixture: ComponentFixture<MenProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
