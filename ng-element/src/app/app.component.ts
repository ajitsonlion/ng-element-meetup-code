import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {AppService} from './app.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.ShadowDom,
    providers: [AppService]
})

export class AppComponent implements OnInit, OnChanges, OnDestroy {
    @Input() increment = 1;
    @Input() time: Date = new Date();
    @Output() doAdd = new EventEmitter<number>();
    total: number;

    private totalSubscription: Subscription;

    constructor(private appService: AppService,
                private cd: ChangeDetectorRef) {
        console.log('constructor called');

    }

    updateCounter() {
        this.appService.increment(this.increment);
        this.doAdd.emit(this.total);
    }


    ngOnInit(): void {
        console.log('ngOnInit called');
        this.totalSubscription = this.appService.currentTotal$().subscribe((total) => {
            this.total = total;
            this.cd.detectChanges();
        });
    }


    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges called', {changes});
        this.cd.detectChanges();
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy called');
        this.totalSubscription.unsubscribe();
        console.log('Cleaned up my subscription like a good component.');
    }

}
