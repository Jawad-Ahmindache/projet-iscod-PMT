import { Directive, Output } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, skip } from 'rxjs';
import * as i0 from "@angular/core";
class TuiPresent {
    constructor() {
        this.visibility$ = new BehaviorSubject(false);
        this.tuiPresentChange = this.visibility$.pipe(distinctUntilChanged(), skip(1));
    }
    ngOnDestroy() {
        this.visibility$.next(false);
    }
    onAnimation(visibility) {
        this.visibility$.next(visibility);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPresent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPresent, isStandalone: true, selector: "[tuiPresentChange]", outputs: { tuiPresentChange: "tuiPresentChange" }, host: { listeners: { "animationcancel.self": "onAnimation(false)", "animationstart.self": "onAnimation(true)" }, properties: { "style.animation": "\"tuiPresent 1s infinite\"" } }, ngImport: i0 }); }
}
export { TuiPresent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPresent, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiPresentChange]',
                    host: {
                        '[style.animation]': '"tuiPresent 1s infinite"',
                        '(animationcancel.self)': 'onAnimation(false)',
                        '(animationstart.self)': 'onAnimation(true)',
                    },
                }]
        }], propDecorators: { tuiPresentChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvZGlyZWN0aXZlcy9wcmVzZW50L3ByZXNlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUVqRSxNQVNhLFVBQVU7SUFUdkI7UUFVcUIsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUcxQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDcEQsb0JBQW9CLEVBQUUsRUFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNWLENBQUM7S0FTTDtJQVBVLFdBQVc7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRVMsV0FBVyxDQUFDLFVBQW1CO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7K0dBZlEsVUFBVTttR0FBVixVQUFVOztTQUFWLFVBQVU7NEZBQVYsVUFBVTtrQkFUdEIsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsSUFBSSxFQUFFO3dCQUNGLG1CQUFtQixFQUFFLDBCQUEwQjt3QkFDL0Msd0JBQXdCLEVBQUUsb0JBQW9CO3dCQUM5Qyx1QkFBdUIsRUFBRSxtQkFBbUI7cUJBQy9DO2lCQUNKOzhCQUttQixnQkFBZ0I7c0JBRC9CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7T25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBza2lwfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ1t0dWlQcmVzZW50Q2hhbmdlXScsXG4gICAgaG9zdDoge1xuICAgICAgICAnW3N0eWxlLmFuaW1hdGlvbl0nOiAnXCJ0dWlQcmVzZW50IDFzIGluZmluaXRlXCInLFxuICAgICAgICAnKGFuaW1hdGlvbmNhbmNlbC5zZWxmKSc6ICdvbkFuaW1hdGlvbihmYWxzZSknLFxuICAgICAgICAnKGFuaW1hdGlvbnN0YXJ0LnNlbGYpJzogJ29uQW5pbWF0aW9uKHRydWUpJyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlQcmVzZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpc2liaWxpdHkkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHVpUHJlc2VudENoYW5nZSA9IHRoaXMudmlzaWJpbGl0eSQucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgc2tpcCgxKSxcbiAgICApO1xuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpc2liaWxpdHkkLm5leHQoZmFsc2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkFuaW1hdGlvbih2aXNpYmlsaXR5OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSQubmV4dCh2aXNpYmlsaXR5KTtcbiAgICB9XG59XG4iXX0=