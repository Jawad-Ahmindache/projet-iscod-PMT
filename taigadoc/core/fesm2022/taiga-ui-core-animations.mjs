import { trigger, transition, query, animateChild, style, animate, stagger } from '@angular/animations';

const TRANSITION = '{{duration}}ms ease-in-out';
const DURATION = { params: { duration: 300 } };
const STAGGER = 300;
/**
 * Add to enable child :leave animation (fixes https://github.com/angular/angular/issues/15753)
 */
const tuiParentAnimation = trigger('tuiParentAnimation', [
    transition(':leave', [query(':scope > *', [animateChild()], { optional: true })]),
]);
/**
 * Add on parent to stop initial :enter animation for children
 */
const tuiParentStop = trigger('tuiParentStop', [transition(':enter', [])]);
const tuiHost = trigger('tuiHost', [
    transition(':enter', [
        style({ overflow: 'clip' }),
        query(':scope > *', [animateChild()], { optional: true }),
    ]),
    transition(':leave', [query(':scope > *', [animateChild()], { optional: true })]),
]);
const tuiHeightCollapse = trigger('tuiHeightCollapse', [
    transition(':enter', [style({ height: 0 }), animate(TRANSITION, style({ height: '*' }))], DURATION),
    transition(':leave', [style({ height: '*' }), animate(TRANSITION, style({ height: 0 }))], DURATION),
]);
const tuiHeightCollapseList = trigger('tuiHeightCollapseList', [
    transition('* => *', [
        query(':enter', [
            style({ height: 0 }),
            stagger(STAGGER, [animate(TRANSITION, style({ height: '*' }))]),
        ], {
            optional: true,
        }),
        query(':leave', [
            style({ height: '*' }),
            stagger(STAGGER, [animate(TRANSITION, style({ height: 0 }))]),
        ], {
            optional: true,
        }),
    ], DURATION),
]);
const tuiWidthCollapse = trigger('tuiWidthCollapse', [
    transition(':enter', [style({ width: 0 }), animate(TRANSITION, style({ width: '*' }))], DURATION),
    transition(':leave', [style({ width: '*' }), animate(TRANSITION, style({ width: 0 }))], DURATION),
]);
const tuiWidthCollapseList = trigger('tuiWidthCollapseList', [
    transition('* => *', [
        query(':enter', [
            style({ width: 0 }),
            stagger(STAGGER, [animate(TRANSITION, style({ width: '*' }))]),
        ], {
            optional: true,
        }),
        query(':leave', [
            style({ width: '*' }),
            stagger(STAGGER, [animate(TRANSITION, style({ width: 0 }))]),
        ], {
            optional: true,
        }),
    ], DURATION),
]);
const tuiFadeIn = trigger('tuiFadeIn', [
    transition(':enter', [style({ opacity: 0 }), animate(TRANSITION, style({ opacity: 1 }))], DURATION),
    transition(':leave', [style({ opacity: 1 }), animate(TRANSITION, style({ opacity: 0 }))], DURATION),
]);
const tuiFadeInList = trigger('tuiFadeInList', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0 }),
            stagger(STAGGER, [animate(TRANSITION, style({ opacity: 1 }))]),
        ], {
            optional: true,
        }),
        query(':leave', [
            style({ opacity: 1 }),
            stagger(STAGGER, [animate(TRANSITION, style({ opacity: 0 }))]),
        ], {
            optional: true,
        }),
    ], DURATION),
]);
const tuiFadeInTop = trigger('tuiFadeInTop', [
    transition(':enter', [
        style({ transform: 'translateY(-{{start}}px)', opacity: 0 }),
        animate(TRANSITION, style({ transform: 'translateY({{end}})', opacity: 1 })),
    ], { params: { end: 0, start: 10, duration: 300 } }),
    transition(':leave', [
        style({ transform: 'translateY({{end}})', opacity: 1 }),
        animate(TRANSITION, style({ transform: 'translateY(-{{start}}px)', opacity: 0 })),
    ], { params: { end: 0, start: 10, duration: 300 } }),
]);
const tuiFadeInBottom = trigger('tuiFadeInBottom', [
    transition(':enter', [
        style({ transform: 'translateY({{start}}px)', opacity: 0 }),
        animate(TRANSITION, style({ transform: 'translateY({{end}})', opacity: 1 })),
    ], { params: { end: 0, start: 10, duration: 300 } }),
    transition(':leave', [
        style({ transform: 'translateY({{end}})', opacity: 1 }),
        animate(TRANSITION, style({ transform: 'translateY({{start}}px)', opacity: 0 })),
    ], { params: { end: 0, start: 10, duration: 300 } }),
]);
const tuiDropdownAnimation = trigger('tuiDropdownAnimation', [
    transition(':enter', [
        style({ transform: 'translateY(-{{start}}px)', opacity: 0 }),
        animate(TRANSITION, style({ transform: 'translateY({{end}})', opacity: 1 })),
    ], { params: { end: 0, start: 10, duration: 300 } }),
    transition(':leave', [
        style({ transform: 'translateY({{end}})', opacity: 1 }),
        animate(TRANSITION, style({ transform: 'translateY(-{{start}}px)', opacity: 0 })),
    ], { params: { end: 0, start: 10, duration: 300 } }),
]);
const tuiScaleIn = trigger('tuiScaleIn', [
    transition(':enter', [
        style({ transform: 'scale({{start}})' }),
        animate('{{duration}}ms {{easing}}', style({ transform: 'scale({{end}})' })),
    ], { params: { end: 1, start: 0, duration: 300, easing: 'ease-in-out' } }),
    transition(':leave', [
        style({ transform: 'scale({{end}})' }),
        animate(TRANSITION, style({ transform: 'scale({{start}})' })),
    ], { params: { end: 1, start: 0, duration: 300 } }),
]);
const tuiPop = trigger('tuiPop', [
    transition(':enter', [
        style({ transform: 'scale({{start}})' }),
        animate(TRANSITION, style({ transform: 'scale({{middle}})' })),
        animate(TRANSITION, style({ transform: 'scale({{end}})' })),
    ], { params: { end: 1, middle: 1.1, start: 0, duration: 300 } }),
    transition(':leave', [
        style({ transform: 'scale({{end}})' }),
        animate(TRANSITION, style({ transform: 'scale({{middle}})' })),
        animate(TRANSITION, style({ transform: 'scale({{start}})' })),
    ], { params: { end: 1, middle: 1.1, start: 0, duration: 300 } }),
]);
const tuiScaleInList = trigger('tuiScaleInList', [
    transition('* => *', [
        query(':enter', [
            style({ transform: 'scale({{start}})' }),
            stagger(STAGGER, [
                animate(TRANSITION, style({ transform: 'scale({{end}})' })),
            ]),
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'scale({{end}})' }),
            stagger(STAGGER, [
                animate(TRANSITION, style({ transform: 'scale({{start}})' })),
            ]),
        ], { optional: true }),
    ], { params: { end: 1, start: 0, duration: 300 } }),
]);
const tuiSlideIn = trigger('tuiSlideIn', [
    transition('* => left', [
        style({ transform: 'translateX(-{{start}})' }),
        animate(TRANSITION, style({ transform: 'translateX({{end}})' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
    transition('left => *', [
        style({ transform: 'translateX({{end}})' }),
        animate(TRANSITION, style({ transform: 'translateX(-{{start}})' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
    transition('* => right', [
        style({ transform: 'translateX({{start}})' }),
        animate(TRANSITION, style({ transform: 'translateX({{end}})' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
    transition('right => *', [
        style({ transform: 'translateX({{end}})' }),
        animate(TRANSITION, style({ transform: 'translateX({{start}})' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
]);
const tuiSlideInLeft = trigger('tuiSlideInLeft', [
    transition(':enter', [
        style({ transform: 'translateX(-{{start}})' }),
        animate(TRANSITION, style({ transform: 'translateX({{end}})' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
    transition(':leave', [
        style({ transform: 'translateX({{end}})' }),
        animate(TRANSITION, style({ transform: 'translateX(-{{start}})' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
]);
const tuiSlideInLeftList = trigger('tuiSlideInLeftList', [
    transition('* => *', [
        query(':enter', [
            style({ transform: 'translateX(-{{start}})' }),
            stagger(STAGGER, [
                animate(TRANSITION, style({ transform: 'translateX({{end}})' })),
            ]),
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX({{end}})' }),
            stagger(STAGGER, [
                animate(TRANSITION, style({ transform: 'translateX(-{{start}})' })),
            ]),
        ], { optional: true }),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
]);
const tuiSlideInRight = trigger('tuiSlideInRight', [
    transition(':enter', [
        style({ transform: 'translateX({{start}})' }),
        animate(TRANSITION, style({ transform: 'translateX({{end}})' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
    transition(':leave', [
        style({ transform: 'translateX({{end}})' }),
        animate(TRANSITION, style({ transform: 'translateX({{start}})' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
]);
const tuiSlideInRightList = trigger('tuiSlideInRightList', [
    transition('* => *', [
        query(':enter', [
            style({ transform: 'translateX({{start}})' }),
            stagger(STAGGER, [
                animate(TRANSITION, style({ transform: 'translateX({{end}})' })),
            ]),
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX({{end}})' }),
            stagger(STAGGER, [
                animate(TRANSITION, style({ transform: 'translateX({{start}})' })),
            ]),
        ], { optional: true }),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
]);
const tuiSlideInTop = trigger('tuiSlideInTop', [
    transition(':enter', [
        style({ transform: 'translate3d(0,{{start}},0)', pointerEvents: 'none' }),
        animate(TRANSITION, style({ transform: 'translate3d(0,{{end}},0)' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
    transition(':leave', [
        style({ transform: 'translate3d(0,{{end}},0)' }),
        animate(TRANSITION, style({ transform: 'translate3d(0,{{start}},0)' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
]);
const tuiSlideInTopList = trigger('tuiSlideInTopList', [
    transition('* => *', [
        query(':enter', [
            style({ transform: 'translateY({{start}})' }),
            stagger(STAGGER, [
                animate(TRANSITION, style({ transform: 'translateY({{end}})' })),
            ]),
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateY({{end}})' }),
            stagger(STAGGER, [
                animate(TRANSITION, style({ transform: 'translateY({{start}})' })),
            ]),
        ], { optional: true }),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
]);
const tuiSlideInBottom = trigger('tuiSlideInBottom', [
    transition(':enter', [
        style({ transform: 'translateY(-{{start}})' }),
        animate(TRANSITION, style({ transform: 'translateY({{end}})' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
    transition(':leave', [
        style({ transform: 'translateY({{end}})' }),
        animate(TRANSITION, style({ transform: 'translateY(-{{start}})' })),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
]);
const tuiSlideInBottomList = trigger('tuiSlideInBottomList', [
    transition('* => *', [
        query(':enter', [
            style({ transform: 'translateY(-{{start}})' }),
            stagger(STAGGER, [
                animate(TRANSITION, style({ transform: 'translateY({{end}})' })),
            ]),
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateY({{end}})' }),
            stagger(STAGGER, [
                animate(TRANSITION, style({ transform: 'translateY(-{{start}})' })),
            ]),
        ], { optional: true }),
    ], { params: { end: 0, start: '100%', duration: 300 } }),
]);

/**
 * Generated bundle index. Do not edit.
 */

export { tuiDropdownAnimation, tuiFadeIn, tuiFadeInBottom, tuiFadeInList, tuiFadeInTop, tuiHeightCollapse, tuiHeightCollapseList, tuiHost, tuiParentAnimation, tuiParentStop, tuiPop, tuiScaleIn, tuiScaleInList, tuiSlideIn, tuiSlideInBottom, tuiSlideInBottomList, tuiSlideInLeft, tuiSlideInLeftList, tuiSlideInRight, tuiSlideInRightList, tuiSlideInTop, tuiSlideInTopList, tuiWidthCollapse, tuiWidthCollapseList };
//# sourceMappingURL=taiga-ui-core-animations.mjs.map
