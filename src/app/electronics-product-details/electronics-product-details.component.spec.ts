import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsProductDetailsComponent } from './electronics-product-details.component';

describe('ElectronicsProductDetailsComponent', () => {
  let component: ElectronicsProductDetailsComponent;
  let fixture: ComponentFixture<ElectronicsProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
