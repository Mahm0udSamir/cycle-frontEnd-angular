import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') openClass = false;
@HostListener('click') toggleOpen() {
  this.openClass = !this.openClass;
}

}
