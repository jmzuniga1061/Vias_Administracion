import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntradermicaPage } from './intradermica.page';

describe('IntradermicaPage', () => {
  let component: IntradermicaPage;
  let fixture: ComponentFixture<IntradermicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntradermicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
