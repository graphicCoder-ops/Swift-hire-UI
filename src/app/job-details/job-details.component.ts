import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {

  jobID:string | null = null;

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    this.jobID = this.route.snapshot.paramMap.get('id');
    console.log("job ID is " + this.jobID);
  }
}
