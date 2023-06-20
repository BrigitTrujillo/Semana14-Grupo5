import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPilotosComponent } from './eliminar-pilotos.component';

describe('EliminarPilotosComponent', () => {
  let component: EliminarPilotosComponent;
  let fixture: ComponentFixture<EliminarPilotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarPilotosComponent]
    });
    fixture = TestBed.createComponent(EliminarPilotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
