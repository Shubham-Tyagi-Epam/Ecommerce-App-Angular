import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsFashionComponent } from './kids-fashion.component';

describe('KidsFashionComponent', () => {
  let component: KidsFashionComponent;
  let fixture: ComponentFixture<KidsFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsFashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
