import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';

interface Job{
  id?:number;
  title:string;
  description:string;
  location:string;
  workMode:number;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http:HttpClient){}

  getJobs():Observable<Job[]>{
    return this.http.get<Job[]>(environment.API_URL + "/jobs")
  }

  postJobs(job: Job): Observable<Job> {
    return this.http.post<Job>(environment.API_URL + "/jobs", job);
  }

}
