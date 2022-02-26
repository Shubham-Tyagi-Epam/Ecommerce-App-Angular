import { AbstractControl } from "@angular/forms";

export function ValidateEmail(control: AbstractControl){
    if(!control.value.endsWith('.com')){
        return { invalidEmail:true };
    }
    return null;
}