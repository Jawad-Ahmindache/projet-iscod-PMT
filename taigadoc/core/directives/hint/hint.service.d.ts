import type { TuiPortalItem } from '@taiga-ui/core/types';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Service for displaying hints/tooltips
 */
export declare class TuiHintService extends BehaviorSubject<readonly TuiPortalItem[]> {
    constructor();
    add(directive: TuiPortalItem): void;
    remove(directive: TuiPortalItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiHintService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TuiHintService>;
}
