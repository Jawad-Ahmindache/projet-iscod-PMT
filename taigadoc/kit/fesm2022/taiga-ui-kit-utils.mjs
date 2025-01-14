import { TuiTime, HOURS_IN_DAY } from '@taiga-ui/cdk/date-time';
import { MaskitoDirective } from '@maskito/angular';
import { tuiDirectiveBinding } from '@taiga-ui/cdk/utils';
import { CHAR_PLUS } from '@taiga-ui/cdk/constants';
import { getCountryCallingCode } from 'libphonenumber-js/core';

function tuiCreateTimePeriods(minHour = 0, maxHour = HOURS_IN_DAY, minutes = [0, 30]) {
    const timeArray = [];
    for (let i = minHour; i < maxHour; i++) {
        minutes.forEach((minute) => {
            const time = new TuiTime(i, minute);
            timeArray.push(time);
        });
    }
    return timeArray;
}

function tuiIsFlat(items) {
    return !Array.isArray(items[0]);
}

function tuiMaskito(options) {
    return tuiDirectiveBinding(MaskitoDirective, 'options', options);
}

function tuiGetCallingCode(iso, metadata) {
    return metadata ? CHAR_PLUS + getCountryCallingCode(iso, metadata) : '';
}

function tuiToggleDay(days, day) {
    return ((days?.find((item) => item.daySame(day))
        ? days.filter((item) => !item.daySame(day))
        : days?.concat(day)) || []);
}

/**
 * Generated bundle index. Do not edit.
 */

export { tuiCreateTimePeriods, tuiGetCallingCode, tuiIsFlat, tuiMaskito, tuiToggleDay };
//# sourceMappingURL=taiga-ui-kit-utils.mjs.map
