import { ChangeDetectionStrategy, Component, inject, INJECTOR } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiDialogService } from '@taiga-ui/core/components/dialog';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { from, of, switchMap } from 'rxjs';
import * as i0 from "@angular/core";
class TuiRoutableDialog {
    constructor() {
        this.route = inject(ActivatedRoute);
        this.router = inject(Router);
        this.injector = inject(INJECTOR);
        this.initialUrl = this.router.url;
        this.dialog = inject(TuiDialogService);
        const dialog = this.route.snapshot.data['dialog'];
        from(isClass(dialog) ? of(dialog) : dialog().then((m) => m.default ?? m))
            .pipe(switchMap((dialog) => this.dialog.open(new PolymorpheusComponent(dialog, this.injector), this.route.snapshot.data['dialogOptions'])), takeUntilDestroyed())
            .subscribe({ complete: () => this.onDialogClosing() });
    }
    get lazyLoadedBackUrl() {
        return (this.route.parent?.snapshot.url || []).map(() => '..').join('/');
    }
    onDialogClosing() {
        if (this.initialUrl === this.router.url) {
            this.navigateToParent();
        }
    }
    navigateToParent() {
        const backUrl = this.route.snapshot.data['isLazy']
            ? this.lazyLoadedBackUrl
            : this.route.snapshot.data['backUrl'];
        void this.router.navigate([backUrl], {
            relativeTo: this.route,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRoutableDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiRoutableDialog, isStandalone: true, selector: "tui-routable-dialog", ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export default TuiRoutableDialog;
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRoutableDialog, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'tui-routable-dialog',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return []; } });
function isClass(fn) {
    return (typeof fn === 'function' &&
        Object.getOwnPropertyDescriptor(fn, 'prototype')?.writable === false);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGFibGUtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL3JvdXRhYmxlLWRpYWxvZy9yb3V0YWJsZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsY0FBYyxFQUFFLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFekMsTUFNcUIsaUJBQWlCO0lBT2xDO1FBTmlCLFVBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0IsV0FBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixhQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLGVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUM3QixXQUFNLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFHL0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3pFLElBQUksQ0FDRCxTQUFTLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDWixJQUFJLHFCQUFxQixDQUFZLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FDNUMsQ0FDSixFQUNELGtCQUFrQixFQUFFLENBQ3ZCO2FBQ0EsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVksaUJBQWlCO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLGVBQWU7UUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVPLGdCQUFnQjtRQUNwQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1lBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFMUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUM7SUFDUCxDQUFDOytHQXpDZ0IsaUJBQWlCO21HQUFqQixpQkFBaUIsK0VBSHhCLEVBQUU7O2VBR0ssaUJBQWlCOzRGQUFqQixpQkFBaUI7a0JBTnJDLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNsRDs7QUE2Q0QsU0FBUyxPQUFPLENBQUMsRUFBVztJQUN4QixPQUFPLENBQ0gsT0FBTyxFQUFFLEtBQUssVUFBVTtRQUN4QixNQUFNLENBQUMsd0JBQXdCLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFLFFBQVEsS0FBSyxLQUFLLENBQ3ZFLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1R5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBpbmplY3QsIElOSkVDVE9SfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsRGVzdHJveWVkfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1R1aURpYWxvZ1NlcnZpY2V9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvZGlhbG9nJztcbmltcG9ydCB7UG9seW1vcnBoZXVzQ29tcG9uZW50fSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcbmltcG9ydCB7ZnJvbSwgb2YsIHN3aXRjaE1hcH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0dWktcm91dGFibGUtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHVpUm91dGFibGVEaWFsb2cge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGUgPSBpbmplY3QoQWN0aXZhdGVkUm91dGUpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG4gICAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvciA9IGluamVjdChJTkpFQ1RPUik7XG4gICAgcHJpdmF0ZSByZWFkb25seSBpbml0aWFsVXJsID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nID0gaW5qZWN0KFR1aURpYWxvZ1NlcnZpY2UpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMucm91dGUuc25hcHNob3QuZGF0YVsnZGlhbG9nJ107XG5cbiAgICAgICAgZnJvbShpc0NsYXNzKGRpYWxvZykgPyBvZihkaWFsb2cpIDogZGlhbG9nKCkudGhlbigobTogYW55KSA9PiBtLmRlZmF1bHQgPz8gbSkpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKGRpYWxvZzogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5vcGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFBvbHltb3JwaGV1c0NvbXBvbmVudDxUeXBlPGFueT4+KGRpYWxvZywgdGhpcy5pbmplY3RvciksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ2RpYWxvZ09wdGlvbnMnXSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCgpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh7Y29tcGxldGU6ICgpID0+IHRoaXMub25EaWFsb2dDbG9zaW5nKCl9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBsYXp5TG9hZGVkQmFja1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMucm91dGUucGFyZW50Py5zbmFwc2hvdC51cmwgfHwgW10pLm1hcCgoKSA9PiAnLi4nKS5qb2luKCcvJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRpYWxvZ0Nsb3NpbmcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxVcmwgPT09IHRoaXMucm91dGVyLnVybCkge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvUGFyZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG5hdmlnYXRlVG9QYXJlbnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJhY2tVcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ2lzTGF6eSddXG4gICAgICAgICAgICA/IHRoaXMubGF6eUxvYWRlZEJhY2tVcmxcbiAgICAgICAgICAgIDogdGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhWydiYWNrVXJsJ107XG5cbiAgICAgICAgdm9pZCB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYmFja1VybF0sIHtcbiAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMucm91dGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNDbGFzcyhmbjogdW5rbm93bik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGZuLCAncHJvdG90eXBlJyk/LndyaXRhYmxlID09PSBmYWxzZVxuICAgICk7XG59XG4iXX0=