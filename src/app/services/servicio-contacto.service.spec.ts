import { TestBed } from '@angular/core/testing';

import { ServicioContactoService } from './servicio-contacto.service';

describe('ServicioContactoService', () => {
  let service: ServicioContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
