import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenProductDetailsComponent } from './women-product-details.component';

describe('WomenProductDetailsComponent', () => {
  let component: WomenProductDetailsComponent;
  let fixture: ComponentFixture<WomenProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomenProductDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
