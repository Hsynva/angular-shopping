import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-spinner',
  template: `
    <div [ngClass]="['spinner-border', color]" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `,
  styles: [''],
})
export class MySpinnerComponent implements OnInit {
  @Input() color: string = 'text-secondary';
  constructor() {}

  ngOnInit(): void {}
}
