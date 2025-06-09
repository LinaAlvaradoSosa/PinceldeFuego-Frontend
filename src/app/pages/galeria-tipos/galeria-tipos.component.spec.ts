import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaTiposComponent } from './galeria-tipos.component';

describe('GaleriaTiposComponent', () => {
  let component: GaleriaTiposComponent;
  let fixture: ComponentFixture<GaleriaTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaTiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
