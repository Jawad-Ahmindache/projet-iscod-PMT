import { inject, signal, effect, Optional, SkipSelf, ElementRef } from '@angular/core';
import { tuiCreateTokenFromFactory, tuiCreateToken, tuiProvideOptions, tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WA_LOCAL_STORAGE, WA_WINDOW } from '@ng-web-apis/common';
import { fromEvent, filter, of, map, merge, switchMap, takeUntil, share } from 'rxjs';
import { TuiDayOfWeek } from '@taiga-ui/cdk/date-time';
import { tuiExtractI18n } from '@taiga-ui/i18n/utils';
import { CHAR_NO_BREAK_SPACE } from '@taiga-ui/cdk/constants';
import { tuiTypedFromEvent } from '@taiga-ui/cdk/observables';

const TUI_REDUCED_MOTION = tuiCreateTokenFromFactory(() => inject(DOCUMENT).defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)')
    .matches ?? false);

/**
 * Speed of all Taiga UI animations. 1 equals 300ms.
 */
const TUI_ANIMATIONS_SPEED = tuiCreateTokenFromFactory(() => inject(TUI_REDUCED_MOTION) ? 0 : 1);

const TUI_ASSETS_PATH = tuiCreateToken('assets/taiga-ui/icons');
function tuiAssetsPathProvider(useValue) {
    return {
        provide: TUI_ASSETS_PATH,
        useValue,
    };
}

// TODO: Rename `ellipsis` to `more` in the next major version
const COMMON_ICONS = {
    check: '@tui.check',
    close: '@tui.x',
    error: '@tui.circle-alert',
    more: '@tui.chevron-right',
    search: '@tui.search',
    ellipsis: '@tui.ellipsis',
};
const TUI_COMMON_ICONS = tuiCreateToken(COMMON_ICONS);
function tuiCommonIconsProvider(icons) {
    return tuiProvideOptions(TUI_COMMON_ICONS, icons, COMMON_ICONS);
}

const TUI_DARK_MODE_DEFAULT_KEY = 'tuiDark';
const TUI_DARK_MODE_KEY = tuiCreateToken(TUI_DARK_MODE_DEFAULT_KEY);
const TUI_DARK_MODE = tuiCreateTokenFromFactory(() => {
    let automatic = true;
    const storage = inject(WA_LOCAL_STORAGE);
    const key = inject(TUI_DARK_MODE_KEY);
    const saved = storage.getItem(key);
    const media = inject(WA_WINDOW).matchMedia('(prefers-color-scheme: dark)');
    const result = signal(Boolean((saved && JSON.parse(saved)) ?? media.matches));
    fromEvent(media, 'change')
        .pipe(filter(() => !storage.getItem(key)), takeUntilDestroyed())
        .subscribe(() => {
        automatic = true;
        result.set(media.matches);
    });
    effect(() => {
        const value = String(result());
        if (automatic) {
            automatic = false;
        }
        else {
            storage.setItem(key, value);
        }
    });
    return Object.assign(result, {
        reset: () => {
            storage.removeItem(key);
            automatic = true;
            result.set(media.matches);
        },
    });
});

const TUI_DEFAULT_DATE_FORMAT = {
    mode: 'DMY',
    separator: '.',
};
/**
 * Formatting configuration for displayed dates
 */
const TUI_DATE_FORMAT = tuiCreateToken(of(TUI_DEFAULT_DATE_FORMAT));
function tuiDateFormatProvider(options) {
    return {
        provide: TUI_DATE_FORMAT,
        deps: [[new Optional(), new SkipSelf(), TUI_DATE_FORMAT]],
        useFactory: (parent) => (parent || of(TUI_DEFAULT_DATE_FORMAT)).pipe(map((format) => ({ ...format, ...options }))),
    };
}

/**
 * Token for adding data-type attribute to calendar cell
 */
const TUI_DAY_TYPE_HANDLER = tuiCreateToken((day) => day.isWeekend ? 'weekend' : 'weekday');

/**
 * The first day of the week index
 */
const TUI_FIRST_DAY_OF_WEEK = tuiCreateToken(TuiDayOfWeek.Monday);

/**
 * Localized months names
 */
const TUI_MONTHS = tuiCreateTokenFromFactory(tuiExtractI18n('months'));
/**
 * i18n 'close' word
 */
const TUI_CLOSE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n('close'));
/**
 * i18n 'clear' word
 */
const TUI_CLEAR_WORD = tuiCreateTokenFromFactory(tuiExtractI18n('clear'));
/**
 * i18n 'Nothing found' message
 */
const TUI_NOTHING_FOUND_MESSAGE = tuiCreateTokenFromFactory(tuiExtractI18n('nothingFoundMessage'));
/**
 * i18n of error message
 */
const TUI_DEFAULT_ERROR_MESSAGE = tuiCreateTokenFromFactory(tuiExtractI18n('defaultErrorMessage'));
/**
 * spin i18n texts
 */
const TUI_SPIN_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('spinTexts'));
/**
 * calendars i18n texts
 */
const TUI_SHORT_WEEK_DAYS = tuiCreateTokenFromFactory(tuiExtractI18n('shortWeekDays'));

const TUI_ICON_START = tuiCreateToken('');
const TUI_ICON_END = tuiCreateToken('');

const TUI_ICON_REGISTRY = tuiCreateToken({});
/**
 * @deprecated: use {@link TUI_ICON_REGISTRY}
 */
const TUI_ICON_STARTS = TUI_ICON_REGISTRY;
function tuiIconsProvider(icons) {
    return {
        provide: TUI_ICON_REGISTRY,
        useFactory: () => ({
            ...(inject(TUI_ICON_REGISTRY, { skipSelf: true, optional: true }) || {}),
            ...Object.fromEntries(Object.entries(icons).map(([key, value]) => [
                key,
                `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(value)}`,
            ])),
        }),
    };
}

const TUI_ICON_RESOLVER = tuiCreateTokenFromFactory(() => {
    const path = inject(TUI_ASSETS_PATH);
    return (icon) => `${path}/${icon.replace('@tui.', '').split('.').join('/')}.svg`;
});
/**
 * @deprecated use {@link TUI_ICON_RESOLVER}
 */
const TUI_ICON_START_RESOLVER = TUI_ICON_RESOLVER;
function tuiInjectIconResolver() {
    const icons = inject(TUI_ICON_REGISTRY);
    const resolver = inject(TUI_ICON_RESOLVER);
    return (icon) => !icon || icon.includes('/') ? icon : (icons[icon] ?? resolver(icon));
}
function tuiIconResolverProvider(useValue) {
    return { provide: TUI_ICON_RESOLVER, useValue };
}

/**
 * Token for media constant
 */
const TUI_MEDIA = tuiCreateToken({
    mobile: 768,
    desktopSmall: 1024,
    desktopLarge: 1280,
});

const TUI_DEFAULT_NUMBER_FORMAT = {
    precision: NaN,
    decimalSeparator: '.',
    thousandSeparator: CHAR_NO_BREAK_SPACE,
    rounding: 'truncate',
    decimalMode: 'pad',
};
/**
 * Formatting configuration for displayed numbers
 */
const TUI_NUMBER_FORMAT = tuiCreateToken(of(TUI_DEFAULT_NUMBER_FORMAT));
function tuiNumberFormatProvider(options) {
    return {
        provide: TUI_NUMBER_FORMAT,
        deps: [[new Optional(), new SkipSelf(), TUI_NUMBER_FORMAT]],
        useFactory: (parent) => (parent || of(TUI_DEFAULT_NUMBER_FORMAT)).pipe(map((format) => ({ ...format, ...options }))),
    };
}

const TUI_SCROLL_REF = tuiCreateTokenFromFactory(() => new ElementRef(inject(DOCUMENT).documentElement));

/**
 * A stream of possible selection changes
 */
const TUI_SELECTION_STREAM = tuiCreateTokenFromFactory(() => {
    const doc = inject(DOCUMENT);
    return merge(tuiTypedFromEvent(doc, 'selectionchange'), tuiTypedFromEvent(doc, 'mouseup'), tuiTypedFromEvent(doc, 'mousedown').pipe(switchMap(() => tuiTypedFromEvent(doc, 'mousemove').pipe(takeUntil(tuiTypedFromEvent(doc, 'mouseup'))))), tuiTypedFromEvent(doc, 'keydown'), tuiTypedFromEvent(doc, 'keyup')).pipe(share());
});

const TUI_SPIN_ICONS = tuiCreateToken({
    decrement: '@tui.chevron-left',
    increment: '@tui.chevron-right',
});

const TUI_THEME = tuiCreateToken('Taiga UI');

/**
 * Viewport accessor
 */
const TUI_VIEWPORT = tuiCreateTokenFromFactory(() => {
    const win = inject(WA_WINDOW);
    return {
        type: 'viewport',
        getClientRect() {
            const rect = {
                top: 0,
                left: 0,
                right: win.innerWidth,
                bottom: win.innerHeight,
                width: win.innerWidth,
                height: win.innerHeight,
                x: 0,
                y: 0,
            };
            return {
                ...rect,
                toJSON: () => JSON.stringify(rect),
            };
        },
    };
});
function tuiAsViewport(accessor) {
    return tuiProvide(TUI_VIEWPORT, accessor);
}

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_ANIMATIONS_SPEED, TUI_ASSETS_PATH, TUI_CLEAR_WORD, TUI_CLOSE_WORD, TUI_COMMON_ICONS, TUI_DARK_MODE, TUI_DARK_MODE_DEFAULT_KEY, TUI_DARK_MODE_KEY, TUI_DATE_FORMAT, TUI_DAY_TYPE_HANDLER, TUI_DEFAULT_DATE_FORMAT, TUI_DEFAULT_ERROR_MESSAGE, TUI_DEFAULT_NUMBER_FORMAT, TUI_FIRST_DAY_OF_WEEK, TUI_ICON_END, TUI_ICON_REGISTRY, TUI_ICON_RESOLVER, TUI_ICON_START, TUI_ICON_STARTS, TUI_ICON_START_RESOLVER, TUI_MEDIA, TUI_MONTHS, TUI_NOTHING_FOUND_MESSAGE, TUI_NUMBER_FORMAT, TUI_REDUCED_MOTION, TUI_SCROLL_REF, TUI_SELECTION_STREAM, TUI_SHORT_WEEK_DAYS, TUI_SPIN_ICONS, TUI_SPIN_TEXTS, TUI_THEME, TUI_VIEWPORT, tuiAsViewport, tuiAssetsPathProvider, tuiCommonIconsProvider, tuiDateFormatProvider, tuiIconResolverProvider, tuiIconsProvider, tuiInjectIconResolver, tuiNumberFormatProvider };
//# sourceMappingURL=taiga-ui-core-tokens.mjs.map
