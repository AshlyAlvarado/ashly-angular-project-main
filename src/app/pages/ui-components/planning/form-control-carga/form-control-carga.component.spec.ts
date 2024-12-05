import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlCargaComponent } from './form-control-carga.component';

describe('FormControlCargaComponent', () => {
  let component: FormControlCargaComponent;
  let fixture: ComponentFixture<FormControlCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlCargaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
