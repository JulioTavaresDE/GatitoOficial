import { TestBed } from '@angular/core/testing';

import { NovoUsuaioService } from './novo-usuaio.service';

describe('NovoUsuaioService', () => {
  let service: NovoUsuaioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoUsuaioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
