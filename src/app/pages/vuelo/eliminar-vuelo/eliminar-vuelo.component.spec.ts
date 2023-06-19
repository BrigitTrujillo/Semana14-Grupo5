import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVueloComponent } from './eliminar-vuelo.component';

describe('EliminarVueloComponent', () => {
  let component: EliminarVueloComponent;
  let fixture: ComponentFixture<EliminarVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarVueloComponent]
    });
    fixture = TestBed.createComponent(EliminarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
