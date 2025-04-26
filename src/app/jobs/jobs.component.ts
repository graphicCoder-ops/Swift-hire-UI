import { Component, inject } from '@angular/core';
import {JobService} from '../services/jobservice';
import { CommonModule, NgFor } from '@angular/common';


interface Job{
  id:number;
  title:string;
  description:string;
  location:string;
}

@Component({
  selector: 'app-jobs',
  imports: [CommonModule,NgFor],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  private jobService = inject(JobService);
  jobs: Job[] = [];
  
  ngOnInit(){
    this.jobService.getJobs().subscribe(
      data => {this.jobs = data}
  );
  }

}
