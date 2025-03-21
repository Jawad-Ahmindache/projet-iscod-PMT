import type { TuiSizeXXL, TuiSizeXXS } from '@taiga-ui/core/types';
/**
 * Compares size constants to determine if first size is bigger than the second
 *
 * @param size size that we need to compare
 * @param biggerThanSize size to compare with, 's' by default
 */
export declare function tuiSizeBigger(size: TuiSizeXXL | TuiSizeXXS, biggerThanSize?: TuiSizeXXL | TuiSizeXXS): boolean;
