import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[hide]',
  exportAs: 'hide'
})
export class ToggleDirective {
  @Input() hide: boolean;

  constructor() { }

}
