export interface TuiDurationOptions {
    params: {
        duration: number;
    };
    value: string;
}
/**
 * Add to enable child :leave animation (fixes https://github.com/angular/angular/issues/15753)
 */
export declare const tuiParentAnimation: import("@angular/animations").AnimationTriggerMetadata;
/**
 * Add on parent to stop initial :enter animation for children
 */
export declare const tuiParentStop: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiHost: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiHeightCollapse: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiHeightCollapseList: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiWidthCollapse: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiWidthCollapseList: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiFadeIn: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiFadeInList: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiFadeInTop: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiFadeInBottom: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiDropdownAnimation: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiScaleIn: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiPop: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiScaleInList: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiSlideIn: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiSlideInLeft: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiSlideInLeftList: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiSlideInRight: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiSlideInRightList: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiSlideInTop: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiSlideInTopList: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiSlideInBottom: import("@angular/animations").AnimationTriggerMetadata;
export declare const tuiSlideInBottomList: import("@angular/animations").AnimationTriggerMetadata;
