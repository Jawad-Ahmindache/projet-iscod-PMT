import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { tuiGetNativeFocused } from '@taiga-ui/cdk/utils/focus';
import { filter, fromEvent, merge } from 'rxjs';
import * as i0 from "@angular/core";
class TuiKeyboardService {
    constructor() {
        this.doc = inject(DOCUMENT);
        this.sub = merge(fromEvent(this.doc, 'focusout'), fromEvent(this.doc, 'mousedown').pipe(filter((e) => Object.is(e.target, this.element)))).subscribe(() => {
            this.show();
        });
        this.inputMode = '';
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.show();
    }
    toggle() {
        if (this.element) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    hide() {
        const focused = tuiGetNativeFocused(this.doc);
        if (focused?.inputMode === undefined || this.element) {
            return;
        }
        this.element = focused;
        this.inputMode = focused.inputMode;
        focused.inputMode = 'none';
    }
    show() {
        if (!this.element) {
            return;
        }
        this.element.inputMode = 'none';
        this.element.inputMode = this.inputMode;
        this.element = undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiKeyboardService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiKeyboardService, providedIn: 'root' }); }
}
export { TuiKeyboardService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiKeyboardService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLW1vYmlsZS9zZXJ2aWNlcy9rZXlib2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRTlDLE1BR2Esa0JBQWtCO0lBSC9CO1FBSXFCLFFBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsUUFBRyxHQUFHLEtBQUssQ0FDeEIsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEVBQy9CLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ25ELENBQ0osQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBR0ssY0FBUyxHQUFHLEVBQUUsQ0FBQztLQW9DMUI7SUFsQ1UsV0FBVztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxNQUFNO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVNLElBQUk7UUFDUCxNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFxQixDQUFDO1FBRWxFLElBQUksT0FBTyxFQUFFLFNBQVMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVNLElBQUk7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7K0dBL0NRLGtCQUFrQjttSEFBbEIsa0JBQWtCLGNBRmYsTUFBTTs7U0FFVCxrQkFBa0I7NEZBQWxCLGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge09uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3R1aUdldE5hdGl2ZUZvY3VzZWR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZm9jdXMnO1xuaW1wb3J0IHtmaWx0ZXIsIGZyb21FdmVudCwgbWVyZ2V9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlLZXlib2FyZFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jID0gaW5qZWN0KERPQ1VNRU5UKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN1YiA9IG1lcmdlKFxuICAgICAgICBmcm9tRXZlbnQodGhpcy5kb2MsICdmb2N1c291dCcpLFxuICAgICAgICBmcm9tRXZlbnQodGhpcy5kb2MsICdtb3VzZWRvd24nKS5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKChlKSA9PiBPYmplY3QuaXMoZS50YXJnZXQsIHRoaXMuZWxlbWVudCkpLFxuICAgICAgICApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSk7XG5cbiAgICBwcml2YXRlIGVsZW1lbnQ/OiBFbGVtZW50Q29udGVudEVkaXRhYmxlO1xuICAgIHByaXZhdGUgaW5wdXRNb2RlID0gJyc7XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZm9jdXNlZCA9IHR1aUdldE5hdGl2ZUZvY3VzZWQodGhpcy5kb2MpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGZvY3VzZWQ/LmlucHV0TW9kZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZm9jdXNlZDtcbiAgICAgICAgdGhpcy5pbnB1dE1vZGUgPSBmb2N1c2VkLmlucHV0TW9kZTtcbiAgICAgICAgZm9jdXNlZC5pbnB1dE1vZGUgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5wdXRNb2RlID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5wdXRNb2RlID0gdGhpcy5pbnB1dE1vZGU7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG4iXX0=