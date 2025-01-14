import { AsyncPipe } from '@angular/common';
import { inject, INJECTOR, Injector, Pipe } from '@angular/core';
import { TuiFieldErrorPipe } from './field-error-pipe';
import * as i0 from "@angular/core";
class TuiFieldErrorContentPipe {
    constructor() {
        this.injector = inject(INJECTOR);
        this.localInjector = Injector.create({
            providers: [{ provide: AsyncPipe }, { provide: TuiFieldErrorPipe }],
            parent: this.injector,
        });
        this.asyncPipe = this.localInjector.get(AsyncPipe);
        this.fieldErrorPipe = this.localInjector.get(TuiFieldErrorPipe);
    }
    transform(order) {
        return this.getErrorContent(order);
    }
    ngOnDestroy() {
        this.asyncPipe.ngOnDestroy();
    }
    getErrorContent(order) {
        const error = this.asyncPipe.transform(this.fieldErrorPipe.transform(order));
        if (!error) {
            return '';
        }
        return typeof error.message === 'function'
            ? error.message(error.context)
            : error.message;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFieldErrorContentPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiFieldErrorContentPipe, isStandalone: true, name: "tuiFieldErrorContent", pure: false }); }
}
export { TuiFieldErrorContentPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFieldErrorContentPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiFieldErrorContent',
                    pure: false,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3ItY29udGVudC1waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L3BpcGVzL2ZpZWxkLWVycm9yL2ZpZWxkLWVycm9yLWNvbnRlbnQtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFMUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUcvRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFckQsTUFLYSx3QkFBd0I7SUFMckM7UUFNcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixrQkFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDN0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztZQUMvRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDO1FBRWMsY0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQXFCL0U7SUFuQlUsU0FBUyxDQUFDLEtBQXdCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVPLGVBQWUsQ0FBQyxLQUF3QjtRQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBRUQsT0FBTyxPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssVUFBVTtZQUN0QyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7K0dBNUJRLHdCQUF3Qjs2R0FBeEIsd0JBQXdCOztTQUF4Qix3QkFBd0I7NEZBQXhCLHdCQUF3QjtrQkFMcEMsSUFBSTttQkFBQztvQkFDRixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFLHNCQUFzQjtvQkFDNUIsSUFBSSxFQUFFLEtBQUs7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FzeW5jUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpbmplY3QsIElOSkVDVE9SLCBJbmplY3RvciwgUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7UG9seW1vcnBoZXVzQ29udGVudH0gZnJvbSAnQHRhaWdhLXVpL3BvbHltb3JwaGV1cyc7XG5cbmltcG9ydCB7VHVpRmllbGRFcnJvclBpcGV9IGZyb20gJy4vZmllbGQtZXJyb3ItcGlwZSc7XG5cbkBQaXBlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIG5hbWU6ICd0dWlGaWVsZEVycm9yQ29udGVudCcsXG4gICAgcHVyZTogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFR1aUZpZWxkRXJyb3JDb250ZW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvciA9IGluamVjdChJTkpFQ1RPUik7XG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2NhbEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEFzeW5jUGlwZX0sIHtwcm92aWRlOiBUdWlGaWVsZEVycm9yUGlwZX1dLFxuICAgICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGFzeW5jUGlwZSA9IHRoaXMubG9jYWxJbmplY3Rvci5nZXQoQXN5bmNQaXBlKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpZWxkRXJyb3JQaXBlID0gdGhpcy5sb2NhbEluamVjdG9yLmdldChUdWlGaWVsZEVycm9yUGlwZSk7XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKG9yZGVyOiByZWFkb25seSBzdHJpbmdbXSk6IFBvbHltb3JwaGV1c0NvbnRlbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFcnJvckNvbnRlbnQob3JkZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hc3luY1BpcGUubmdPbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEVycm9yQ29udGVudChvcmRlcjogcmVhZG9ubHkgc3RyaW5nW10pOiBQb2x5bW9ycGhldXNDb250ZW50IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmFzeW5jUGlwZS50cmFuc2Zvcm0odGhpcy5maWVsZEVycm9yUGlwZS50cmFuc2Zvcm0ob3JkZXIpKTtcblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gZXJyb3IubWVzc2FnZShlcnJvci5jb250ZXh0KVxuICAgICAgICAgICAgOiBlcnJvci5tZXNzYWdlO1xuICAgIH1cbn1cbiJdfQ==