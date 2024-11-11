import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionSolicitudPage } from './confirmacion-solicitud.page';

describe('ConfirmacionSolicitudPage', () => {
  let component: ConfirmacionSolicitudPage;
  let fixture: ComponentFixture<ConfirmacionSolicitudPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionSolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
