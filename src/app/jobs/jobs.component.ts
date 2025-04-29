import { Component, inject } from '@angular/core';
import {JobService} from '../services/jobservice';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxEditorComponent, NgxEditorMenuComponent, Editor } from 'ngx-editor';
import { Router } from '@angular/router';


interface Job{
  id?:number;
  title:string;
  description:string;
  location:string;
  workMode:number;
  candidatesCount: number;
}

@Component({
  selector: 'app-jobs',
  imports: [CommonModule,NgFor,FormsModule,NgxEditorComponent, NgxEditorMenuComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  style= {
    editable: true,
    height: '50rem',
    minHeight: '30rem',
    placeholder: 'Type here',
    translate: 'no'
  };

  constructor(private router: Router) {}
  private jobService = inject(JobService);
  jobs: Job[] = [];
  editor: Editor = new Editor();
  isCreating:boolean = false;
  jobTitle: string = '';
  jobDescription: string = '';
  jobLocation:string ='';
  
  ngOnInit(){
    this.jobService.getJobs().subscribe(
      data => {this.jobs = data}
  );
  }


  saveJob() {
    console.log(this.jobDescription)
    if (!this.jobTitle || !this.jobDescription) {
      alert('Missing fields.');
      return;
    }
  
    this.jobService.postJobs({
      title: this.jobTitle,
      description: this.jobDescription,
      location: this.jobLocation,
      workMode:1,
      candidatesCount:0
    }).subscribe({
      next: (createdJob) => {
        this.jobs.push(createdJob);
        this.isCreating = false;
        this.jobTitle = this.jobDescription = this.jobLocation = '';
      },
      error: (err) => console.error('Error posting job:', err)
    });
  }

  ngOnDestroy(){
    this.editor.destroy();
  }

  openJob(){
    this.router.navigate(['/jobs/specific-job']);
  }
}
