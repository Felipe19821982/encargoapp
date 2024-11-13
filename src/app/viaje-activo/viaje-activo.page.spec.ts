import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeActivoPage } from './viaje-activo.page';

describe('ViajeActivoPage', () => {
  let component: ViajeActivoPage;
  let fixture: ComponentFixture<ViajeActivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeActivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
