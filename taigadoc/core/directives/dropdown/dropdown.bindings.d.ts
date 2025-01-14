import type { Signal, WritableSignal } from '@angular/core';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
type C = PolymorpheusContent;
export declare function tuiDropdown(value: C | WritableSignal<C>): WritableSignal<C>;
export declare function tuiDropdown(value: Signal<C>): Signal<C>;
export declare function tuiDropdownOpen(): WritableSignal<boolean>;
export {};
