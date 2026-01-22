import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntramuscularPage } from './intramuscular.page';

describe('IntramuscularPage', () => {
  let component: IntramuscularPage;
  let fixture: ComponentFixture<IntramuscularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntramuscularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
