import { AbstractControl, ValidatorFn } from "@angular/forms";

export function restrictedWords(words: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (!words) { return null; }

        const invalidWords = words
            .map(word => control.value.includes(word) ? word : null)
            .filter(word => word != null);

        return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords': invalidWords.join(", ") }
            : null
    }
}