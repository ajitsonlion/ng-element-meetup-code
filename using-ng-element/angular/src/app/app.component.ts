import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `

        <p>{{ message }}</p>
        <ng-element
                [attr.increment]="increment"
                [time]="time"
                (doAdd)="handleAddEvent($event)"
        ></ng-element>

    `,
    styles: []
})
export class AppComponent {
    message = 'Hello Angular!';
    increment = 2;
    time = new Date();

    handleAddEvent(e: CustomEvent) {
        console.log(e);
        if (e.detail % 10 === 0) {
            this.message = this.message.split('').reverse().join('');
            this.time = new Date()
        }
    }
}
