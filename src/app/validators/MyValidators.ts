import { FormControl, ValidationErrors } from "@angular/forms";

export class MyValidators{

    static notOnlyWhitespace(control: FormControl): ValidationErrors | null{

        if(control.value != null && control.value.trim().length === 0 && control.value != ""){
            return {'notOnlyWhitespace': true}
        }
        else{
            return null
        }

    }

}