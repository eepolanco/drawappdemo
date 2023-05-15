import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[minLength]',
})
export class MinLengthDirective {
  constructor(public ngControl: NgControl) {}

  @HostListener('input', ['$event.target'])
  onInput(input: HTMLInputElement) {
    const minLength = 3;
    const value = input.value;
    if (value.length === minLength) {
      input.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Backspace' || event.key === 'Delete') {
          event.preventDefault();
        }
      });
    } else {
      input.removeEventListener('keydown', () => {});
    }
  }
}
