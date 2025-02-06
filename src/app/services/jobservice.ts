import { Injectable } from '@angular/core';

interface JobType {
  id: number;
  title: string;
  description: string;
  salary?: number | any;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  getJobs(): JobType[] {
    return [
      {
        id: 1,
        title: 'Frontend Developer',
        description: 'For Angular',
      },
      { id: 2, title: 'Backend Developer', description: 'For Spring Boot' },
    ];
  }
}
