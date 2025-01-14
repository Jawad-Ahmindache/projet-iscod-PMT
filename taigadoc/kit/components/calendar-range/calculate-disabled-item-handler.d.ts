import type { TuiDay, TuiDayLike, TuiDayRange } from '@taiga-ui/cdk/date-time';
import type { TuiBooleanHandler } from '@taiga-ui/cdk/types';
export declare const calculateDisabledItemHandler: (disabledItemHandler: TuiBooleanHandler<TuiDay>, value: TuiDayRange | null, minLength: TuiDayLike | null) => TuiBooleanHandler<TuiDay>;
