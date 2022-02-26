import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsProductDetailsComponent } from './kids-product-details.component';

describe('KidsProductDetailsComponent', () => {
  let component: KidsProductDetailsComponent;
  let fixture: ComponentFixture<KidsProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
