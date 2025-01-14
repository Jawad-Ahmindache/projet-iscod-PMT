import { Optional, Self, inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import { tuiControlValue } from '@taiga-ui/cdk/observables';
import { tuiCreateToken, tuiCreateTokenFromFactory, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';
import { map, of } from 'rxjs';
import { tuiExtractI18n } from '@taiga-ui/i18n/utils';
import { TUI_FIRST_DAY, TUI_LAST_DAY } from '@taiga-ui/cdk/date-time';
import { TUI_DEFAULT_IDENTITY_MATCHER, TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { TUI_DROPDOWN_COMPONENT } from '@taiga-ui/core/directives/dropdown';

/**
 * Stream that emits calendar data change
 */
const TUI_CALENDAR_DATE_STREAM = tuiCreateToken();
function tuiDateStreamWithTransformer(transformer) {
    return {
        provide: TUI_CALENDAR_DATE_STREAM,
        deps: [
            [new Optional(), new Self(), NgControl],
            [new Optional(), transformer],
        ],
        useFactory: tuiControlValueFactory,
    };
}
function tuiControlValueFactory(control, transformer) {
    return control
        ? tuiControlValue(control).pipe(map((value) => transformer ? transformer?.fromControlValue(value) : value))
        : of(null);
}

// TODO: Refactor to use `TuiValueTransformer` and add ability to provide it for all controls
/**
 * Control value transformer of TuiDay to custom value format for InputDate* components
 */
const TUI_DATE_VALUE_TRANSFORMER = tuiCreateToken();
/**
 * Control value transformer for InputDateRange component
 */
const TUI_DATE_RANGE_VALUE_TRANSFORMER = tuiCreateToken();
/**
 * Control value transformer for InputDateTime component
 */
const TUI_DATE_TIME_VALUE_TRANSFORMER = tuiCreateToken();
/**
 * Control value transformer for InputTime component
 */
const TUI_TIME_VALUE_TRANSFORMER = tuiCreateToken();

const TUI_CONFIRM_WORDS = tuiCreateTokenFromFactory(tuiExtractI18n('confirm'));
const TUI_CANCEL_WORD = tuiCreateTokenFromFactory(tuiExtractI18n('cancel'));
const TUI_DONE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n('done'));
const TUI_MORE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n('more'));
const TUI_HIDE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n('hide'));
const TUI_SHOW_ALL_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n('showAll'));
const TUI_OTHER_DATE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n('otherDate'));
const TUI_CHOOSE_DAY_OR_RANGE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('mobileCalendarTexts'));
const TUI_FROM_TO_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('range'));
const TUI_PLUS_MINUS_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('countTexts'));
const TUI_TIME_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('time'));
const TUI_DATE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('dateTexts'));
const TUI_DIGITAL_INFORMATION_UNITS = tuiCreateTokenFromFactory(tuiExtractI18n('digitalInformationUnits'));
const TUI_COPY_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('copyTexts'));
const TUI_PASSWORD_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('passwordTexts'));
const TUI_CALENDAR_MONTHS = tuiCreateTokenFromFactory(tuiExtractI18n('shortCalendarMonths'));
const TUI_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('fileTexts'));
const TUI_PAGINATION_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('pagination'));
const TUI_INPUT_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('inputFileTexts'));
const TUI_MULTI_SELECT_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('multiSelectTexts'));
const TUI_COUNTRIES = tuiCreateTokenFromFactory(tuiExtractI18n('countries'));
const TUI_PREVIEW_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('previewTexts'));
const TUI_PREVIEW_ZOOM_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('zoomTexts'));
const TUI_INTERNATIONAL_SEARCH = tuiCreateTokenFromFactory(tuiExtractI18n('phoneSearch'));

const TUI_INPUT_DATE_DEFAULT_OPTIONS = {
    icon: () => '@tui.calendar',
    min: TUI_FIRST_DAY,
    max: TUI_LAST_DAY,
    nativePicker: false,
};
/**
 * Default parameters for InputDate component
 */
const TUI_INPUT_DATE_OPTIONS = tuiCreateToken(TUI_INPUT_DATE_DEFAULT_OPTIONS);
function tuiInputDateOptionsProvider(options) {
    return tuiProvideOptions(TUI_INPUT_DATE_OPTIONS, options, TUI_INPUT_DATE_DEFAULT_OPTIONS);
}

const TUI_DEFAULT_ITEMS_HANDLERS = {
    stringify: String,
    identityMatcher: TUI_DEFAULT_IDENTITY_MATCHER,
    disabledItemHandler: TUI_FALSE_HANDLER,
};
/**
 * Default items handlers for components
 */
const TUI_ITEMS_HANDLERS = tuiCreateToken(TUI_DEFAULT_ITEMS_HANDLERS);
function tuiItemsHandlersProvider(options) {
    return tuiProvideOptions(TUI_ITEMS_HANDLERS, options, TUI_DEFAULT_ITEMS_HANDLERS);
}

/**
 * A component for mobile data picker
 */
const TUI_MOBILE_CALENDAR = tuiCreateToken();
const TUI_MOBILE_CALENDAR_PROVIDER = {
    provide: TUI_DROPDOWN_COMPONENT,
    useFactory: () => (inject(TUI_IS_MOBILE) && inject(TUI_MOBILE_CALENDAR, { optional: true })) ||
        inject(TUI_DROPDOWN_COMPONENT, { skipSelf: true }),
};

const TUI_PREVIEW_ICONS_DEFAULT = {
    rotate: '@tui.rotate-ccw-square',
    prev: '@tui.arrow-left',
    next: '@tui.arrow-right',
    zoomIn: '@tui.plus',
    zoomOut: '@tui.minus',
    zoomReset: '@tui.minimize',
};
const TUI_PREVIEW_ICONS = tuiCreateToken(TUI_PREVIEW_ICONS_DEFAULT);
function tuiPreviewIconsProvider(icons) {
    return tuiProvideOptions(TUI_PREVIEW_ICONS, icons, TUI_PREVIEW_ICONS_DEFAULT);
}

const TUI_VALIDATION_ERRORS = tuiCreateToken({});
const tuiValidationErrorsProvider = (useValue) => ({ provide: TUI_VALIDATION_ERRORS, useValue });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_CALENDAR_DATE_STREAM, TUI_CALENDAR_MONTHS, TUI_CANCEL_WORD, TUI_CHOOSE_DAY_OR_RANGE_TEXTS, TUI_CONFIRM_WORDS, TUI_COPY_TEXTS, TUI_COUNTRIES, TUI_DATE_RANGE_VALUE_TRANSFORMER, TUI_DATE_TEXTS, TUI_DATE_TIME_VALUE_TRANSFORMER, TUI_DATE_VALUE_TRANSFORMER, TUI_DEFAULT_ITEMS_HANDLERS, TUI_DIGITAL_INFORMATION_UNITS, TUI_DONE_WORD, TUI_FILE_TEXTS, TUI_FROM_TO_TEXTS, TUI_HIDE_TEXT, TUI_INPUT_DATE_DEFAULT_OPTIONS, TUI_INPUT_DATE_OPTIONS, TUI_INPUT_FILE_TEXTS, TUI_INTERNATIONAL_SEARCH, TUI_ITEMS_HANDLERS, TUI_MOBILE_CALENDAR, TUI_MOBILE_CALENDAR_PROVIDER, TUI_MORE_WORD, TUI_MULTI_SELECT_TEXTS, TUI_OTHER_DATE_TEXT, TUI_PAGINATION_TEXTS, TUI_PASSWORD_TEXTS, TUI_PLUS_MINUS_TEXTS, TUI_PREVIEW_ICONS, TUI_PREVIEW_ICONS_DEFAULT, TUI_PREVIEW_TEXTS, TUI_PREVIEW_ZOOM_TEXTS, TUI_SHOW_ALL_TEXT, TUI_TIME_TEXTS, TUI_TIME_VALUE_TRANSFORMER, TUI_VALIDATION_ERRORS, tuiDateStreamWithTransformer, tuiInputDateOptionsProvider, tuiItemsHandlersProvider, tuiPreviewIconsProvider, tuiValidationErrorsProvider };
//# sourceMappingURL=taiga-ui-kit-tokens.mjs.map
