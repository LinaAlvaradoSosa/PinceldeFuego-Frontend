import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiProductosComponent } from './admi-productos.component';

describe('AdmiProductosComponent', () => {
  let component: AdmiProductosComponent;
  let fixture: ComponentFixture<AdmiProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmiProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
