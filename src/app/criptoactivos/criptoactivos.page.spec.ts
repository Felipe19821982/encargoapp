import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriptoactivosPage } from './criptoactivos.page';

describe('CriptoactivosPage', () => {
  let component: CriptoactivosPage;
  let fixture: ComponentFixture<CriptoactivosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriptoactivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
