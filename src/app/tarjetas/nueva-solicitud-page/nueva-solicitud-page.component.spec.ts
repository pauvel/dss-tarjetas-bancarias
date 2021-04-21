import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSolicitudPageComponent } from './nueva-solicitud-page.component';

describe('NuevaSolicitudPageComponent', () => {
  let component: NuevaSolicitudPageComponent;
  let fixture: ComponentFixture<NuevaSolicitudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaSolicitudPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaSolicitudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
