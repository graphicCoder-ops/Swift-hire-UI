import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'candidates', component: CandidatesComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'job-details/:id', component: JobDetailsComponent }
];
