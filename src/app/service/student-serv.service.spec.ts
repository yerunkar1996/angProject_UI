import { TestBed } from '@angular/core/testing';

import { StudentServService } from './student-serv.service';

describe('StudentServService', () => {
  let service: StudentServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
