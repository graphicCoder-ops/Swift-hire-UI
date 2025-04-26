import { Component, inject } from '@angular/core';
import { CandidateService } from '../services/candidateservice';
import { CommonModule, NgFor } from '@angular/common';

interface CandidateType{
  name:string;
  applied:string;
  email:string;
  phone:number;
  address:string;
  city:string;
}

@Component({
  selector: 'app-candidates',
  imports: [CommonModule,NgFor],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent {
    private candidateservice = inject(CandidateService);
    list:CandidateType[] = this.candidateservice.getCandidate();
}
