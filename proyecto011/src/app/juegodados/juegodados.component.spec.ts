import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegodadosComponent } from './juegodados.component';

describe('JuegodadosComponent', () => {
  let component: JuegodadosComponent;
  let fixture: ComponentFixture<JuegodadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegodadosComponent],
    });
    fixture = TestBed.createComponent(JuegodadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
