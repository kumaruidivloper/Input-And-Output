import { ValidationErrors, AbstractControl } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf('') >= 0)
            return { cannotContainSpace: true };
            return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Ok');
                if (control.value === 'kumar')
                resolve({ shouldBeUnique: true });
                else resolve()
                return null;
            }, 2000);
        });
    }
}