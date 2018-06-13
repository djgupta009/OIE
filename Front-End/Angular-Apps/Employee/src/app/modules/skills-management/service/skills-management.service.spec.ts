import { TestBed, inject } from '@angular/core/testing';

import { SkillsManagementService } from './skills-management.service';

describe('SkillsManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsManagementService]
    });
  });

  it('should be created', inject([SkillsManagementService], (service: SkillsManagementService) => {
    expect(service).toBeTruthy();
  }));
});
