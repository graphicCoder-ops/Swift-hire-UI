import { Component, inject } from '@angular/core';
import {JobService} from '../services/jobservice';
import { CommonModule, NgFor } from '@angular/common';


interface JobType{
  id:number;
  title:string;
  description:string;
  salary?:number|any;
}

@Component({
  selector: 'app-jobs',
  imports: [CommonModule,NgFor],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  private jobService = inject(JobService);
   list:JobType[] = this.jobService.getJobs();

}
