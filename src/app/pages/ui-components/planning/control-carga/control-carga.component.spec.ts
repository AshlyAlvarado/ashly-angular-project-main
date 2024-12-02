import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCargaComponent } from './control-carga.component';

describe('ControlCargaComponent', () => {
  let component: ControlCargaComponent;
  let fixture: ComponentFixture<ControlCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCargaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
