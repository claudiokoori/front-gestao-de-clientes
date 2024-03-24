import { TestBed } from '@angular/core/testing';

import { EnderecoServiceService } from './endereco.service';

describe('EnderecoServiceService', () => {
  let service: EnderecoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
