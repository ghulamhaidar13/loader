import { ComponentFactoryResolver, Directive, ElementRef, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[loader]'
})
export class LoaderDirective implements OnChanges {
    // @Input() loading;
    @Input() loader;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private elementRef: ElementRef
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        if (changes.loader && changes.loader.currentValue) {
            this.loadLoaderComponent();
        }

        if (changes.loader && !changes.loader.currentValue && !changes.loader.firstChange) {
            this.removeLoaderComponent();
        }
    }

    loadLoaderComponent() {
        this.elementRef.nativeElement.parentNode.style.position = 'relative';
        this.viewContainerRef.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(LoaderComponent), 0
        );
    }

    removeLoaderComponent() {
        console.log('---');
        this.viewContainerRef.clear();
    }
}
