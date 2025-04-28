import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface CandidateType{
  id:number;
  candidateFirstName:string;
  candidateLastName:string;
  candidateEmail:string;
  candidatePhone:number;

}
@Injectable({
  providedIn: 'root',
})    

export class CandidateService{

  constructor (private http:HttpClient){}
  private url = 'https://swifthire-vy0q.onrender.com/candidate';

  getCandidate() :Observable<CandidateType[]>{
    return this.http.get<CandidateType[]>(this.url)
  }


}