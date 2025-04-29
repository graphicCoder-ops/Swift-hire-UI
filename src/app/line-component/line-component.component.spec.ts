import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineComponentComponent } from './line-component.component';

describe('LineComponentComponent', () => {
  let component: LineComponentComponent;
  let fixture: ComponentFixture<LineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
