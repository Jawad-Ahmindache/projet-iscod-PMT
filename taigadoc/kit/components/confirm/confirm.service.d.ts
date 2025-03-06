import type { TuiDialogOptions } from '@taiga-ui/core/components/dialog';
import type { Observable } from 'rxjs';
import type { TuiConfirmData } from './confirm.component';
import * as i0 from "@angular/core";
export declare class TuiConfirmService {
    private readonly dialogs;
    private dirty;
    markAsDirty(): void;
    markAsPristine(): void;
    withConfirm(options: Partial<TuiDialogOptions<TuiConfirmData>>): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiConfirmService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TuiConfirmService>;
}
