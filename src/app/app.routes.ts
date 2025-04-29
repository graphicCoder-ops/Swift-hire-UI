import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { JobsComponent } from './jobs/jobs.component';
import { SpecificJobComponent } from './specific-job/specific-job.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'candidates', component: CandidatesComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'jobs/specific-job', component: SpecificJobComponent }
];
