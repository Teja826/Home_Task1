import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'dateFormatter'
})
export class DateFormatter implements PipeTransform {
    transform(value: string) {
        return new Date(value).toLocaleString('en-US', { timeZone: 'Indian/Christmas' });
    }
}