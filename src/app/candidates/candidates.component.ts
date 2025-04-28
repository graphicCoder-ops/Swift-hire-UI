import { Component, inject } from '@angular/core';
import { CandidateService } from '../services/candidateservice';
import { CommonModule, NgFor } from '@angular/common';

interface CandidateType{
  id:number;
  candidateFirstName:string;
  candidateLastName:string;
  candidateEmail:string;
  candidatePhone:number;
}

@Component({
  selector: 'app-candidates',
  imports: [CommonModule,NgFor],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent {
    private candidateservice = inject(CandidateService);
    candidates :CandidateType[]=[]

    ngOnInit(){
      this.candidateservice.getCandidate().subscribe(
        data => {this.candidates = data}
    );
    }
}
