import { Directive, inject, Input } from '@angular/core';
import { TuiTreeItem } from '../components/tree-item/tree-item.component';
import { TUI_TREE_ACCESSOR } from '../misc/tree.tokens';
import * as i0 from "@angular/core";
class TuiTreeNode {
    constructor() {
        this.component = inject(TuiTreeItem);
        this.directive = inject(TUI_TREE_ACCESSOR, {
            optional: true,
        });
    }
    set value(value) {
        this.directive?.register(this.component, value);
    }
    ngOnDestroy() {
        this.directive?.unregister(this.component);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeNode, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTreeNode, isStandalone: true, selector: "tui-tree-item[tuiTreeNode]", inputs: { value: ["tuiTreeNode", "value"] }, ngImport: i0 }); }
}
export { TuiTreeNode };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeNode, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-tree-item[tuiTreeNode]',
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['tuiTreeNode']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL3RyZWUvZGlyZWN0aXZlcy90cmVlLW5vZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFFeEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7O0FBRXRELE1BSWEsV0FBVztJQUp4QjtRQUtxQixjQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLGNBQVMsR0FBRyxNQUFNLENBQXFCLGlCQUFpQixFQUFFO1lBQ3ZFLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztLQVVOO0lBUkcsSUFDVyxLQUFLLENBQUMsS0FBUTtRQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7K0dBYlEsV0FBVzttR0FBWCxXQUFXOztTQUFYLFdBQVc7NEZBQVgsV0FBVztrQkFKdkIsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLDRCQUE0QjtpQkFDekM7OEJBUWMsS0FBSztzQkFEZixLQUFLO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7T25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBpbmplY3QsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtUdWlUcmVlSXRlbX0gZnJvbSAnLi4vY29tcG9uZW50cy90cmVlLWl0ZW0vdHJlZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgdHlwZSB7VHVpVHJlZUFjY2Vzc29yfSBmcm9tICcuLi9taXNjL3RyZWUuaW50ZXJmYWNlcyc7XG5pbXBvcnQge1RVSV9UUkVFX0FDQ0VTU09SfSBmcm9tICcuLi9taXNjL3RyZWUudG9rZW5zJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3R1aS10cmVlLWl0ZW1bdHVpVHJlZU5vZGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVHJlZU5vZGU8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50ID0gaW5qZWN0KFR1aVRyZWVJdGVtKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRpcmVjdGl2ZSA9IGluamVjdDxUdWlUcmVlQWNjZXNzb3I8VD4+KFRVSV9UUkVFX0FDQ0VTU09SLCB7XG4gICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgQElucHV0KCd0dWlUcmVlTm9kZScpXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogVCkge1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZT8ucmVnaXN0ZXIodGhpcy5jb21wb25lbnQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlPy51bnJlZ2lzdGVyKHRoaXMuY29tcG9uZW50KTtcbiAgICB9XG59XG4iXX0=