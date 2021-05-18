import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaEjecucionComponent } from './prueba-ejecucion.component';

describe('PruebaEjecucionComponent', () => {
  let component: PruebaEjecucionComponent;
  let fixture: ComponentFixture<PruebaEjecucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaEjecucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaEjecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
