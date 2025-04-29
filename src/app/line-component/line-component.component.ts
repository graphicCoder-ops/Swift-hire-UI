import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-line-component',
  imports: [BaseChartDirective],
  templateUrl: './line-component.component.html',
  styleUrl: './line-component.component.css'
})
export class LineComponentComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Candidates',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(81,127,246,0.8)',
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor() {
  }

  ngOnInit() {
  }
}
