import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoarticulosComponent } from './listadoarticulos.component';

describe('ListadoarticulosComponent', () => {
  let component: ListadoarticulosComponent;
  let fixture: ComponentFixture<ListadoarticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoarticulosComponent]
    });
    fixture = TestBed.createComponent(ListadoarticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
