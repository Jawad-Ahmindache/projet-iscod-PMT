import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CHAR_NO_BREAK_SPACE } from '@taiga-ui/cdk/constants';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import * as i0 from "@angular/core";
export const TUI_ALWAYS_DASHED = () => 'dashed';
export const TUI_ALWAYS_DOTTED = () => 'dotted';
export const TUI_ALWAYS_SOLID = () => 'solid';
export const TUI_ALWAYS_NONE = () => 'none';
class TuiAxes {
    constructor() {
        this.axisX = 'solid';
        this.axisXLabels = [];
        this.axisY = 'solid';
        this.axisYInset = false;
        this.axisYLabels = [];
        this.axisYName = '';
        this.axisYSecondaryInset = false;
        this.axisYSecondaryLabels = [];
        this.axisYSecondaryName = '';
        this.horizontalLines = 0;
        this.horizontalLinesHandler = TUI_ALWAYS_SOLID;
        this.verticalLines = 0;
        this.verticalLinesHandler = TUI_ALWAYS_DASHED;
    }
    get hasXLabels() {
        return !!this.axisXLabels.length;
    }
    get hasYLabels() {
        return (!!this.axisYLabels.length && !this.axisYInset) || !!this.axisYName;
    }
    get hasYSecondaryLabels() {
        return ((!!this.axisYSecondaryLabels.length && !this.axisYSecondaryInset) ||
            !!this.axisYSecondaryName);
    }
    fallback(label) {
        return label || CHAR_NO_BREAK_SPACE;
    }
    get centeredXLabels() {
        return this.axisY === 'none';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAxes, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiAxes, isStandalone: true, selector: "tui-axes", inputs: { axisX: "axisX", axisXLabels: "axisXLabels", axisY: "axisY", axisYInset: "axisYInset", axisYLabels: "axisYLabels", axisYName: "axisYName", axisYSecondaryInset: "axisYSecondaryInset", axisYSecondaryLabels: "axisYSecondaryLabels", axisYSecondaryName: "axisYSecondaryName", horizontalLines: "horizontalLines", horizontalLinesHandler: "horizontalLinesHandler", verticalLines: "verticalLines", verticalLinesHandler: "verticalLinesHandler" }, host: { properties: { "class._centered": "centeredXLabels" } }, ngImport: i0, template: "<div\n    *ngIf=\"hasYLabels\"\n    class=\"t-side\"\n    [class.t-side_padding]=\"hasXLabels\"\n>\n    <div\n        *ngIf=\"axisYName\"\n        automation-id=\"tui-axex__axis-y-name\"\n        class=\"t-name t-name_primary\"\n    >\n        {{ axisYName }}\n    </div>\n    <div\n        *ngIf=\"!axisYInset\"\n        class=\"t-labels-y t-labels-y_primary\"\n    >\n        <div\n            *ngFor=\"let label of axisYLabels\"\n            automation-id=\"tui-axex__axis-y-label\"\n            class=\"t-label-y\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n</div>\n<div class=\"t-wrapper\">\n    <div\n        class=\"t-grid\"\n        [style.borderBottomStyle]=\"axisX\"\n        [style.borderLeftStyle]=\"axisY\"\n    >\n        <div class=\"t-vertical\">\n            <div\n                *tuiRepeatTimes=\"let index of verticalLines\"\n                automation-id=\"tui-axex__vertical-line\"\n                class=\"t-line t-line_vertical\"\n                [style.borderRightStyle]=\"verticalLinesHandler(index, verticalLines)\"\n            ></div>\n        </div>\n        <div class=\"t-horizontal\">\n            <div\n                *tuiRepeatTimes=\"let index of horizontalLines\"\n                automation-id=\"tui-axex__horizontal-line\"\n                class=\"t-line\"\n                [style.borderTopStyle]=\"horizontalLinesHandler(index, horizontalLines)\"\n            ></div>\n        </div>\n        <div\n            *ngIf=\"axisYInset\"\n            class=\"t-labels-y t-labels-y_inset\"\n        >\n            <div\n                *ngFor=\"let label of axisYLabels\"\n                automation-id=\"tui-axex__axis-y-label\"\n                class=\"t-label-y\"\n            >\n                {{ fallback(label) }}\n            </div>\n        </div>\n        <div\n            *ngIf=\"axisYSecondaryInset\"\n            class=\"t-labels-y t-labels-y_inset t-labels-y_inset_secondary\"\n        >\n            <div\n                *ngFor=\"let label of axisYSecondaryLabels\"\n                automation-id=\"tui-axex__axis-y-secondary-label\"\n                class=\"t-label-y\"\n            >\n                {{ fallback(label) }}\n            </div>\n        </div>\n        <div class=\"t-content\">\n            <ng-content />\n        </div>\n    </div>\n    <div\n        *ngIf=\"hasXLabels\"\n        class=\"t-labels-x\"\n    >\n        <div\n            *ngFor=\"let label of axisXLabels\"\n            automation-id=\"tui-axex__axis-x-label\"\n            class=\"t-label-x\"\n            [class.t-label-x_transparent]=\"label === null\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n</div>\n<div\n    *ngIf=\"hasYSecondaryLabels\"\n    class=\"t-side\"\n    [class.t-side_padding]=\"hasXLabels\"\n>\n    <div\n        *ngIf=\"!axisYSecondaryInset\"\n        class=\"t-labels-y t-labels-y_secondary\"\n    >\n        <div\n            *ngFor=\"let label of axisYSecondaryLabels\"\n            automation-id=\"tui-axex__axis-y-secondary-label\"\n            class=\"t-label-y\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n    <div\n        *ngIf=\"axisYSecondaryName\"\n        automation-id=\"tui-axex__axis-y-secondary-name\"\n        class=\"t-name\"\n    >\n        {{ axisYSecondaryName }}\n    </div>\n</div>\n", styles: [":host{display:flex}.t-wrapper{display:flex;flex:1;block-size:100%;flex-direction:column}.t-grid{position:relative;display:flex;flex:1;justify-content:space-around;align-items:flex-end;border-width:1px;border-color:var(--tui-border-normal);isolation:isolate}.t-horizontal{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column}.t-vertical{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex}:host._centered .t-vertical:after{content:\"\";display:block;flex:1 0 1px}.t-line{flex:2 0 1px;box-sizing:border-box;border-width:1px;border-color:var(--tui-border-normal)}:host._centered .t-line_vertical:first-child{flex:1 0 1px;pointer-events:none}.t-side{display:flex;align-items:stretch}.t-side_padding{padding-bottom:2rem}.t-name{font:var(--tui-font-text-xs);writing-mode:tb;text-align:center;padding-left:.75rem;color:var(--tui-text-secondary)}.t-name_primary{transform:rotate(180deg)}.t-labels-y{display:flex;font:var(--tui-font-text-xs);flex-direction:column-reverse;justify-content:space-between;color:var(--tui-text-secondary)}.t-labels-y_primary{text-align:end;padding-right:.75rem}.t-labels-y_secondary{padding-left:.75rem}.t-labels-y_transparent{border-color:transparent}.t-labels-y_inset{position:absolute;top:.5625rem;left:.25rem;bottom:-.75rem;pointer-events:none}.t-labels-y_inset_secondary{left:auto;right:.25rem;text-align:end}.t-labels-x{position:relative;display:flex;font:var(--tui-font-text-xs);border-inline-end:1px solid transparent;color:var(--tui-text-secondary)}.t-label-x{block-size:.4375rem;border-inline-start:1px solid var(--tui-border-normal);flex:1;margin-bottom:1.5625rem}.t-label-x:before{content:\"\";display:block;block-size:.5625rem}.t-label-x_transparent{border-color:transparent}:host._centered .t-label-x{block-size:2rem;text-align:center;border:none;margin:0}:host:not(._centered) .t-label-x:last-child:not(:first-child){position:absolute;right:0;text-align:end;border-inline-start:none}.t-label-y:first-child{margin-bottom:-.375rem}.t-label-y:last-child{margin-top:-.375rem}.t-content{position:absolute;top:0;left:-1px;right:0;bottom:-1px;display:flex;align-items:flex-end}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiAxes };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAxes, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-axes', imports: [NgForOf, NgIf, TuiRepeatTimes], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class._centered]': 'centeredXLabels',
                    }, template: "<div\n    *ngIf=\"hasYLabels\"\n    class=\"t-side\"\n    [class.t-side_padding]=\"hasXLabels\"\n>\n    <div\n        *ngIf=\"axisYName\"\n        automation-id=\"tui-axex__axis-y-name\"\n        class=\"t-name t-name_primary\"\n    >\n        {{ axisYName }}\n    </div>\n    <div\n        *ngIf=\"!axisYInset\"\n        class=\"t-labels-y t-labels-y_primary\"\n    >\n        <div\n            *ngFor=\"let label of axisYLabels\"\n            automation-id=\"tui-axex__axis-y-label\"\n            class=\"t-label-y\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n</div>\n<div class=\"t-wrapper\">\n    <div\n        class=\"t-grid\"\n        [style.borderBottomStyle]=\"axisX\"\n        [style.borderLeftStyle]=\"axisY\"\n    >\n        <div class=\"t-vertical\">\n            <div\n                *tuiRepeatTimes=\"let index of verticalLines\"\n                automation-id=\"tui-axex__vertical-line\"\n                class=\"t-line t-line_vertical\"\n                [style.borderRightStyle]=\"verticalLinesHandler(index, verticalLines)\"\n            ></div>\n        </div>\n        <div class=\"t-horizontal\">\n            <div\n                *tuiRepeatTimes=\"let index of horizontalLines\"\n                automation-id=\"tui-axex__horizontal-line\"\n                class=\"t-line\"\n                [style.borderTopStyle]=\"horizontalLinesHandler(index, horizontalLines)\"\n            ></div>\n        </div>\n        <div\n            *ngIf=\"axisYInset\"\n            class=\"t-labels-y t-labels-y_inset\"\n        >\n            <div\n                *ngFor=\"let label of axisYLabels\"\n                automation-id=\"tui-axex__axis-y-label\"\n                class=\"t-label-y\"\n            >\n                {{ fallback(label) }}\n            </div>\n        </div>\n        <div\n            *ngIf=\"axisYSecondaryInset\"\n            class=\"t-labels-y t-labels-y_inset t-labels-y_inset_secondary\"\n        >\n            <div\n                *ngFor=\"let label of axisYSecondaryLabels\"\n                automation-id=\"tui-axex__axis-y-secondary-label\"\n                class=\"t-label-y\"\n            >\n                {{ fallback(label) }}\n            </div>\n        </div>\n        <div class=\"t-content\">\n            <ng-content />\n        </div>\n    </div>\n    <div\n        *ngIf=\"hasXLabels\"\n        class=\"t-labels-x\"\n    >\n        <div\n            *ngFor=\"let label of axisXLabels\"\n            automation-id=\"tui-axex__axis-x-label\"\n            class=\"t-label-x\"\n            [class.t-label-x_transparent]=\"label === null\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n</div>\n<div\n    *ngIf=\"hasYSecondaryLabels\"\n    class=\"t-side\"\n    [class.t-side_padding]=\"hasXLabels\"\n>\n    <div\n        *ngIf=\"!axisYSecondaryInset\"\n        class=\"t-labels-y t-labels-y_secondary\"\n    >\n        <div\n            *ngFor=\"let label of axisYSecondaryLabels\"\n            automation-id=\"tui-axex__axis-y-secondary-label\"\n            class=\"t-label-y\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n    <div\n        *ngIf=\"axisYSecondaryName\"\n        automation-id=\"tui-axex__axis-y-secondary-name\"\n        class=\"t-name\"\n    >\n        {{ axisYSecondaryName }}\n    </div>\n</div>\n", styles: [":host{display:flex}.t-wrapper{display:flex;flex:1;block-size:100%;flex-direction:column}.t-grid{position:relative;display:flex;flex:1;justify-content:space-around;align-items:flex-end;border-width:1px;border-color:var(--tui-border-normal);isolation:isolate}.t-horizontal{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column}.t-vertical{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex}:host._centered .t-vertical:after{content:\"\";display:block;flex:1 0 1px}.t-line{flex:2 0 1px;box-sizing:border-box;border-width:1px;border-color:var(--tui-border-normal)}:host._centered .t-line_vertical:first-child{flex:1 0 1px;pointer-events:none}.t-side{display:flex;align-items:stretch}.t-side_padding{padding-bottom:2rem}.t-name{font:var(--tui-font-text-xs);writing-mode:tb;text-align:center;padding-left:.75rem;color:var(--tui-text-secondary)}.t-name_primary{transform:rotate(180deg)}.t-labels-y{display:flex;font:var(--tui-font-text-xs);flex-direction:column-reverse;justify-content:space-between;color:var(--tui-text-secondary)}.t-labels-y_primary{text-align:end;padding-right:.75rem}.t-labels-y_secondary{padding-left:.75rem}.t-labels-y_transparent{border-color:transparent}.t-labels-y_inset{position:absolute;top:.5625rem;left:.25rem;bottom:-.75rem;pointer-events:none}.t-labels-y_inset_secondary{left:auto;right:.25rem;text-align:end}.t-labels-x{position:relative;display:flex;font:var(--tui-font-text-xs);border-inline-end:1px solid transparent;color:var(--tui-text-secondary)}.t-label-x{block-size:.4375rem;border-inline-start:1px solid var(--tui-border-normal);flex:1;margin-bottom:1.5625rem}.t-label-x:before{content:\"\";display:block;block-size:.5625rem}.t-label-x_transparent{border-color:transparent}:host._centered .t-label-x{block-size:2rem;text-align:center;border:none;margin:0}:host:not(._centered) .t-label-x:last-child:not(:first-child){position:absolute;right:0;text-align:end;border-inline-start:none}.t-label-y:first-child{margin-bottom:-.375rem}.t-label-y:last-child{margin-top:-.375rem}.t-content{position:absolute;top:0;left:-1px;right:0;bottom:-1px;display:flex;align-items:flex-end}\n"] }]
        }], propDecorators: { axisX: [{
                type: Input
            }], axisXLabels: [{
                type: Input
            }], axisY: [{
                type: Input
            }], axisYInset: [{
                type: Input
            }], axisYLabels: [{
                type: Input
            }], axisYName: [{
                type: Input
            }], axisYSecondaryInset: [{
                type: Input
            }], axisYSecondaryLabels: [{
                type: Input
            }], axisYSecondaryName: [{
                type: Input
            }], horizontalLines: [{
                type: Input
            }], horizontalLinesHandler: [{
                type: Input
            }], verticalLines: [{
                type: Input
            }], verticalLinesHandler: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRvbi1jaGFydHMvY29tcG9uZW50cy9heGVzL2F4ZXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvYXhlcy9heGVzLnRlbXBsYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUNBQXVDLENBQUM7O0FBRXJFLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFtQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDaEUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQW1CLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUNoRSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBbUIsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO0FBQzlELE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBbUIsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBRTVELE1BV2EsT0FBTztJQVhwQjtRQWFXLFVBQUssR0FBZ0IsT0FBTyxDQUFDO1FBRzdCLGdCQUFXLEdBQWlDLEVBQUUsQ0FBQztRQUcvQyxVQUFLLEdBQWdCLE9BQU8sQ0FBQztRQUc3QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25CLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUdwQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBR2Ysd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBRzVCLHlCQUFvQixHQUFzQixFQUFFLENBQUM7UUFHN0MsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBR3hCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBR3BCLDJCQUFzQixHQUFtQixnQkFBZ0IsQ0FBQztRQUcxRCxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUdsQix5QkFBb0IsR0FBbUIsaUJBQWlCLENBQUM7S0F3Qm5FO0lBdEJHLElBQVcsVUFBVTtRQUNqQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ2pCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDL0UsQ0FBQztJQUVELElBQVcsbUJBQW1CO1FBQzFCLE9BQU8sQ0FDSCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQzVCLENBQUM7SUFDTixDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQW9CO1FBQ2hDLE9BQU8sS0FBSyxJQUFJLG1CQUFtQixDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFjLGVBQWU7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUNqQyxDQUFDOytHQTdEUSxPQUFPO21HQUFQLE9BQU8sa2tCQ3RCcEIsbXlHQWtIQSw0ckVEcEdjLE9BQU8sbUhBQUUsSUFBSSw2RkFBRSxjQUFjOztTQVE5QixPQUFPOzRGQUFQLE9BQU87a0JBWG5CLFNBQVM7aUNBQ00sSUFBSSxZQUNOLFVBQVUsV0FDWCxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLG1CQUd2Qix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNGLG1CQUFtQixFQUFFLGlCQUFpQjtxQkFDekM7OEJBSU0sS0FBSztzQkFEWCxLQUFLO2dCQUlDLFdBQVc7c0JBRGpCLEtBQUs7Z0JBSUMsS0FBSztzQkFEWCxLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLEtBQUs7Z0JBSUMsV0FBVztzQkFEakIsS0FBSztnQkFJQyxTQUFTO3NCQURmLEtBQUs7Z0JBSUMsbUJBQW1CO3NCQUR6QixLQUFLO2dCQUlDLG9CQUFvQjtzQkFEMUIsS0FBSztnQkFJQyxrQkFBa0I7c0JBRHhCLEtBQUs7Z0JBSUMsZUFBZTtzQkFEckIsS0FBSztnQkFJQyxzQkFBc0I7c0JBRDVCLEtBQUs7Z0JBSUMsYUFBYTtzQkFEbkIsS0FBSztnQkFJQyxvQkFBb0I7c0JBRDFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nRm9yT2YsIE5nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtUdWlMaW5lSGFuZGxlciwgVHVpTGluZVR5cGV9IGZyb20gJ0B0YWlnYS11aS9hZGRvbi1jaGFydHMvdHlwZXMnO1xuaW1wb3J0IHtDSEFSX05PX0JSRUFLX1NQQUNFfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQge1R1aVJlcGVhdFRpbWVzfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RpcmVjdGl2ZXMvcmVwZWF0LXRpbWVzJztcblxuZXhwb3J0IGNvbnN0IFRVSV9BTFdBWVNfREFTSEVEOiBUdWlMaW5lSGFuZGxlciA9ICgpID0+ICdkYXNoZWQnO1xuZXhwb3J0IGNvbnN0IFRVSV9BTFdBWVNfRE9UVEVEOiBUdWlMaW5lSGFuZGxlciA9ICgpID0+ICdkb3R0ZWQnO1xuZXhwb3J0IGNvbnN0IFRVSV9BTFdBWVNfU09MSUQ6IFR1aUxpbmVIYW5kbGVyID0gKCkgPT4gJ3NvbGlkJztcbmV4cG9ydCBjb25zdCBUVUlfQUxXQVlTX05PTkU6IFR1aUxpbmVIYW5kbGVyID0gKCkgPT4gJ25vbmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAndHVpLWF4ZXMnLFxuICAgIGltcG9ydHM6IFtOZ0Zvck9mLCBOZ0lmLCBUdWlSZXBlYXRUaW1lc10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL2F4ZXMudGVtcGxhdGUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXhlcy5zdHlsZS5sZXNzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLl9jZW50ZXJlZF0nOiAnY2VudGVyZWRYTGFiZWxzJyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlBeGVzIHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBheGlzWDogVHVpTGluZVR5cGUgPSAnc29saWQnO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYXhpc1hMYWJlbHM6IFJlYWRvbmx5QXJyYXk8c3RyaW5nIHwgbnVsbD4gPSBbXTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGF4aXNZOiBUdWlMaW5lVHlwZSA9ICdzb2xpZCc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBheGlzWUluc2V0ID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBheGlzWUxhYmVsczogcmVhZG9ubHkgc3RyaW5nW10gPSBbXTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGF4aXNZTmFtZSA9ICcnO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYXhpc1lTZWNvbmRhcnlJbnNldCA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYXhpc1lTZWNvbmRhcnlMYWJlbHM6IHJlYWRvbmx5IHN0cmluZ1tdID0gW107XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBheGlzWVNlY29uZGFyeU5hbWUgPSAnJztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhvcml6b250YWxMaW5lcyA9IDA7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBob3Jpem9udGFsTGluZXNIYW5kbGVyOiBUdWlMaW5lSGFuZGxlciA9IFRVSV9BTFdBWVNfU09MSUQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2ZXJ0aWNhbExpbmVzID0gMDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZlcnRpY2FsTGluZXNIYW5kbGVyOiBUdWlMaW5lSGFuZGxlciA9IFRVSV9BTFdBWVNfREFTSEVEO1xuXG4gICAgcHVibGljIGdldCBoYXNYTGFiZWxzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmF4aXNYTGFiZWxzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhhc1lMYWJlbHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoISF0aGlzLmF4aXNZTGFiZWxzLmxlbmd0aCAmJiAhdGhpcy5heGlzWUluc2V0KSB8fCAhIXRoaXMuYXhpc1lOYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzWVNlY29uZGFyeUxhYmVscygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICghIXRoaXMuYXhpc1lTZWNvbmRhcnlMYWJlbHMubGVuZ3RoICYmICF0aGlzLmF4aXNZU2Vjb25kYXJ5SW5zZXQpIHx8XG4gICAgICAgICAgICAhIXRoaXMuYXhpc1lTZWNvbmRhcnlOYW1lXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGZhbGxiYWNrKGxhYmVsOiBzdHJpbmcgfCBudWxsKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGxhYmVsIHx8IENIQVJfTk9fQlJFQUtfU1BBQ0U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBjZW50ZXJlZFhMYWJlbHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF4aXNZID09PSAnbm9uZSc7XG4gICAgfVxufVxuIiwiPGRpdlxuICAgICpuZ0lmPVwiaGFzWUxhYmVsc1wiXG4gICAgY2xhc3M9XCJ0LXNpZGVcIlxuICAgIFtjbGFzcy50LXNpZGVfcGFkZGluZ109XCJoYXNYTGFiZWxzXCJcbj5cbiAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiYXhpc1lOYW1lXCJcbiAgICAgICAgYXV0b21hdGlvbi1pZD1cInR1aS1heGV4X19heGlzLXktbmFtZVwiXG4gICAgICAgIGNsYXNzPVwidC1uYW1lIHQtbmFtZV9wcmltYXJ5XCJcbiAgICA+XG4gICAgICAgIHt7IGF4aXNZTmFtZSB9fVxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgICAgKm5nSWY9XCIhYXhpc1lJbnNldFwiXG4gICAgICAgIGNsYXNzPVwidC1sYWJlbHMteSB0LWxhYmVscy15X3ByaW1hcnlcIlxuICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGF4aXNZTGFiZWxzXCJcbiAgICAgICAgICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktYXhleF9fYXhpcy15LWxhYmVsXCJcbiAgICAgICAgICAgIGNsYXNzPVwidC1sYWJlbC15XCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3sgZmFsbGJhY2sobGFiZWwpIH19XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwidC13cmFwcGVyXCI+XG4gICAgPGRpdlxuICAgICAgICBjbGFzcz1cInQtZ3JpZFwiXG4gICAgICAgIFtzdHlsZS5ib3JkZXJCb3R0b21TdHlsZV09XCJheGlzWFwiXG4gICAgICAgIFtzdHlsZS5ib3JkZXJMZWZ0U3R5bGVdPVwiYXhpc1lcIlxuICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInQtdmVydGljYWxcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAqdHVpUmVwZWF0VGltZXM9XCJsZXQgaW5kZXggb2YgdmVydGljYWxMaW5lc1wiXG4gICAgICAgICAgICAgICAgYXV0b21hdGlvbi1pZD1cInR1aS1heGV4X192ZXJ0aWNhbC1saW5lXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInQtbGluZSB0LWxpbmVfdmVydGljYWxcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5ib3JkZXJSaWdodFN0eWxlXT1cInZlcnRpY2FsTGluZXNIYW5kbGVyKGluZGV4LCB2ZXJ0aWNhbExpbmVzKVwiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidC1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgKnR1aVJlcGVhdFRpbWVzPVwibGV0IGluZGV4IG9mIGhvcml6b250YWxMaW5lc1wiXG4gICAgICAgICAgICAgICAgYXV0b21hdGlvbi1pZD1cInR1aS1heGV4X19ob3Jpem9udGFsLWxpbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidC1saW5lXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuYm9yZGVyVG9wU3R5bGVdPVwiaG9yaXpvbnRhbExpbmVzSGFuZGxlcihpbmRleCwgaG9yaXpvbnRhbExpbmVzKVwiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdJZj1cImF4aXNZSW5zZXRcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0LWxhYmVscy15IHQtbGFiZWxzLXlfaW5zZXRcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGF4aXNZTGFiZWxzXCJcbiAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLWlkPVwidHVpLWF4ZXhfX2F4aXMteS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0LWxhYmVsLXlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IGZhbGxiYWNrKGxhYmVsKSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdJZj1cImF4aXNZU2Vjb25kYXJ5SW5zZXRcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0LWxhYmVscy15IHQtbGFiZWxzLXlfaW5zZXQgdC1sYWJlbHMteV9pbnNldF9zZWNvbmRhcnlcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGF4aXNZU2Vjb25kYXJ5TGFiZWxzXCJcbiAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLWlkPVwidHVpLWF4ZXhfX2F4aXMteS1zZWNvbmRhcnktbGFiZWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidC1sYWJlbC15XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBmYWxsYmFjayhsYWJlbCkgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInQtY29udGVudFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgICAqbmdJZj1cImhhc1hMYWJlbHNcIlxuICAgICAgICBjbGFzcz1cInQtbGFiZWxzLXhcIlxuICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGF4aXNYTGFiZWxzXCJcbiAgICAgICAgICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktYXhleF9fYXhpcy14LWxhYmVsXCJcbiAgICAgICAgICAgIGNsYXNzPVwidC1sYWJlbC14XCJcbiAgICAgICAgICAgIFtjbGFzcy50LWxhYmVsLXhfdHJhbnNwYXJlbnRdPVwibGFiZWwgPT09IG51bGxcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7eyBmYWxsYmFjayhsYWJlbCkgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXZcbiAgICAqbmdJZj1cImhhc1lTZWNvbmRhcnlMYWJlbHNcIlxuICAgIGNsYXNzPVwidC1zaWRlXCJcbiAgICBbY2xhc3MudC1zaWRlX3BhZGRpbmddPVwiaGFzWExhYmVsc1wiXG4+XG4gICAgPGRpdlxuICAgICAgICAqbmdJZj1cIiFheGlzWVNlY29uZGFyeUluc2V0XCJcbiAgICAgICAgY2xhc3M9XCJ0LWxhYmVscy15IHQtbGFiZWxzLXlfc2Vjb25kYXJ5XCJcbiAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBheGlzWVNlY29uZGFyeUxhYmVsc1wiXG4gICAgICAgICAgICBhdXRvbWF0aW9uLWlkPVwidHVpLWF4ZXhfX2F4aXMteS1zZWNvbmRhcnktbGFiZWxcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0LWxhYmVsLXlcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7eyBmYWxsYmFjayhsYWJlbCkgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgICAqbmdJZj1cImF4aXNZU2Vjb25kYXJ5TmFtZVwiXG4gICAgICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktYXhleF9fYXhpcy15LXNlY29uZGFyeS1uYW1lXCJcbiAgICAgICAgY2xhc3M9XCJ0LW5hbWVcIlxuICAgID5cbiAgICAgICAge3sgYXhpc1lTZWNvbmRhcnlOYW1lIH19XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==