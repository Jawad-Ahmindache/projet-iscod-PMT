import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TuiPopoverService, TuiThemeColorService } from '@taiga-ui/cdk/services';
import { TUI_DIALOGS } from '@taiga-ui/core/components/dialog';
import { pairwise, startWith } from 'rxjs';
import { TuiSheetDialogComponent } from './sheet-dialog.component';
import { TUI_SHEET_DIALOG_OPTIONS } from './sheet-dialog.options';
import * as i0 from "@angular/core";
const THEME = '#404040';
class TuiSheetDialogService extends TuiPopoverService {
    constructor() {
        super(...arguments);
        this.theme = inject(TuiThemeColorService);
        this.initial = this.theme.color;
        this.$ = this.items$
            .pipe(startWith([]), pairwise(), takeUntilDestroyed())
            .subscribe(([prev, next]) => {
            if (!prev.length && next.length) {
                this.initial = this.theme.color;
                this.theme.color = THEME;
            }
            if (!next.length && prev.length) {
                this.theme.color = this.initial;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSheetDialogService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSheetDialogService, providedIn: 'root', useFactory: () => new TuiSheetDialogService(TUI_DIALOGS, TuiSheetDialogComponent, inject(TUI_SHEET_DIALOG_OPTIONS)) }); }
}
export { TuiSheetDialogService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSheetDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiSheetDialogService(TUI_DIALOGS, TuiSheetDialogComponent, inject(TUI_SHEET_DIALOG_OPTIONS)),
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hlZXQtZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRvbi1tb2JpbGUvY29tcG9uZW50cy9zaGVldC1kaWFsb2cvc2hlZXQtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLG9CQUFvQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRWpFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOztBQUVoRSxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUM7QUFFeEIsTUFTYSxxQkFBc0IsU0FBUSxpQkFBNkM7SUFUeEY7O1FBVXFCLFVBQUssR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5QyxZQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFaEIsTUFBQyxHQUFHLElBQUksQ0FBQyxNQUFNO2FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzthQUNyRCxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUM1QjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkM7UUFDTCxDQUFDLENBQUMsQ0FBQztLQUNWOytHQWhCWSxxQkFBcUI7bUhBQXJCLHFCQUFxQixjQVJsQixNQUFNLGNBQ04sR0FBRyxFQUFFLENBQ2IsSUFBSSxxQkFBcUIsQ0FDckIsV0FBVyxFQUNYLHVCQUF1QixFQUN2QixNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FDbkM7O1NBRUkscUJBQXFCOzRGQUFyQixxQkFBcUI7a0JBVGpDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07b0JBQ2xCLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FDYiwwQkFDSSxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUNuQztpQkFDUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsRGVzdHJveWVkfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge1R1aVBvcG92ZXJTZXJ2aWNlLCBUdWlUaGVtZUNvbG9yU2VydmljZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9zZXJ2aWNlcyc7XG5pbXBvcnQge1RVSV9ESUFMT0dTfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL2RpYWxvZyc7XG5pbXBvcnQge3BhaXJ3aXNlLCBzdGFydFdpdGh9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1R1aVNoZWV0RGlhbG9nQ29tcG9uZW50fSBmcm9tICcuL3NoZWV0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHR5cGUge1R1aVNoZWV0RGlhbG9nT3B0aW9uc30gZnJvbSAnLi9zaGVldC1kaWFsb2cub3B0aW9ucyc7XG5pbXBvcnQge1RVSV9TSEVFVF9ESUFMT0dfT1BUSU9OU30gZnJvbSAnLi9zaGVldC1kaWFsb2cub3B0aW9ucyc7XG5cbmNvbnN0IFRIRU1FID0gJyM0MDQwNDAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICAgIHVzZUZhY3Rvcnk6ICgpID0+XG4gICAgICAgIG5ldyBUdWlTaGVldERpYWxvZ1NlcnZpY2UoXG4gICAgICAgICAgICBUVUlfRElBTE9HUyxcbiAgICAgICAgICAgIFR1aVNoZWV0RGlhbG9nQ29tcG9uZW50LFxuICAgICAgICAgICAgaW5qZWN0KFRVSV9TSEVFVF9ESUFMT0dfT1BUSU9OUyksXG4gICAgICAgICksXG59KVxuZXhwb3J0IGNsYXNzIFR1aVNoZWV0RGlhbG9nU2VydmljZSBleHRlbmRzIFR1aVBvcG92ZXJTZXJ2aWNlPFR1aVNoZWV0RGlhbG9nT3B0aW9uczxhbnk+PiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0aGVtZSA9IGluamVjdChUdWlUaGVtZUNvbG9yU2VydmljZSk7XG4gICAgcHJpdmF0ZSBpbml0aWFsID0gdGhpcy50aGVtZS5jb2xvcjtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSAkID0gdGhpcy5pdGVtcyRcbiAgICAgICAgLnBpcGUoc3RhcnRXaXRoKFtdKSwgcGFpcndpc2UoKSwgdGFrZVVudGlsRGVzdHJveWVkKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKFtwcmV2LCBuZXh0XSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmV2Lmxlbmd0aCAmJiBuZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMudGhlbWUuY29sb3I7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVtZS5jb2xvciA9IFRIRU1FO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW5leHQubGVuZ3RoICYmIHByZXYubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVtZS5jb2xvciA9IHRoaXMuaW5pdGlhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG4iXX0=