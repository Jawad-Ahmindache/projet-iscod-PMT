import type { OnChanges, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/validator";
export declare class TuiInputFilesValidator implements OnChanges, OnInit {
    private readonly options;
    private readonly validator;
    accept: string;
    maxFileSize: number;
    ngOnChanges(): void;
    ngOnInit(): void;
    private validate;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiInputFilesValidator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiInputFilesValidator, never, ["tuiInputFilesValidator"], { "accept": { "alias": "accept"; "required": false; }; "maxFileSize": { "alias": "maxFileSize"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.TuiValidator; inputs: {}; outputs: {}; }]>;
}
