import { Component, inject } from '@angular/core';
import {JobService} from '../services/jobservice';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Job{
  id?:number;
  title:string;
  description:string;
  location:string;
  workMode:number;
}

@Component({
  selector: 'app-jobs',
  imports: [CommonModule,NgFor,FormsModule],
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


  isCreating:boolean = false;
  jobTitle: string = '';
  jobDescription: string = '';
  jobLocation:string ='';

  saveJob() {
    if (!this.jobTitle || !this.jobDescription) {
      alert('Missing fields.');
      return;
    }
  
    this.jobService.postJobs({
      title: this.jobTitle,
      description: this.jobDescription,
      location: this.jobLocation,
      workMode:1
    }).subscribe({
      next: (createdJob) => {
        this.jobs.push(createdJob);
        this.isCreating = false;
        this.jobTitle = this.jobDescription = this.jobLocation = '';
      },
      error: (err) => console.error('Error posting job:', err)
    });
  }
}
