import { AbstractControl, ValidationErrors } from '@angular/forms';

export const QuantityValidator =
  (step: number) =>
  (control: AbstractControl): ValidationErrors | null => {
    const number = parseInt(control.value);
    return isNaN(number) || number <= 0 || number % step !== 0
      ? { incorrectStep: { value: control.value } }
      : null;
  };
