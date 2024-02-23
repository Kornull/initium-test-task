import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function mailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const validEmails = ['mail.ru', 'yandex.ru', 'gmail.com'];
    const { value } = control;

    const mailGroup = value.split('@')[1];

    if (validEmails.includes(mailGroup)) {
      return null;
    }

    return { mailDomainError: true };
  };
}
