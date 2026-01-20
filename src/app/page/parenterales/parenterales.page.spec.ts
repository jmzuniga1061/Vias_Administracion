import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParenteralesPage } from './parenterales.page';

describe('ParenteralesPage', () => {
  let component: ParenteralesPage;
  let fixture: ComponentFixture<ParenteralesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenteralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
