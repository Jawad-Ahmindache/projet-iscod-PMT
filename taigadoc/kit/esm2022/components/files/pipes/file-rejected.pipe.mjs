import { inject, Pipe } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CHAR_NO_BREAK_SPACE } from '@taiga-ui/cdk/constants';
import { TUI_DIGITAL_INFORMATION_UNITS, TUI_INPUT_FILE_TEXTS } from '@taiga-ui/kit/tokens';
import { combineLatest, map } from 'rxjs';
import { TUI_FILE_OPTIONS } from '../file/file.options';
import { tuiCreateFileFormatValidator, tuiCreateFileSizeValidator, } from '../files.validators';
import { TUI_INPUT_FILES_OPTIONS } from '../input-files/input-files.options';
import * as i0 from "@angular/core";
class TuiFileRejectedPipe {
    constructor() {
        this.options = inject(TUI_INPUT_FILES_OPTIONS);
        this.formatSize = inject(TUI_FILE_OPTIONS).formatSize;
        this.text$ = inject(TUI_INPUT_FILE_TEXTS);
        this.unit$ = inject(TUI_DIGITAL_INFORMATION_UNITS);
    }
    transform(file, { accept = this.options.accept, maxFileSize = this.options.maxFileSize, } = this.options) {
        const sizeValidator = tuiCreateFileSizeValidator(maxFileSize);
        const formatValidator = tuiCreateFileFormatValidator(accept);
        const control = new FormControl(file);
        return combineLatest([this.text$, this.unit$]).pipe(map(([{ maxSizeRejectionReason, formatRejectionReason }, units]) => {
            if (file && formatValidator(control)) {
                return {
                    name: file.name,
                    size: file.size,
                    content: formatRejectionReason,
                };
            }
            if (file && sizeValidator(control)) {
                return {
                    name: file.name,
                    size: file.size,
                    content: `${maxSizeRejectionReason}${CHAR_NO_BREAK_SPACE}${this.formatSize(units, maxFileSize)}`,
                };
            }
            return null;
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFileRejectedPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiFileRejectedPipe, isStandalone: true, name: "tuiFileRejected" }); }
}
export { TuiFileRejectedPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFileRejectedPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiFileRejected',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1yZWplY3RlZC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvZmlsZXMvcGlwZXMvZmlsZS1yZWplY3RlZC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsNkJBQTZCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RixPQUFPLEVBQUMsYUFBYSxFQUFFLEdBQUcsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQ0gsNEJBQTRCLEVBQzVCLDBCQUEwQixHQUM3QixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOztBQUUzRSxNQUlhLG1CQUFtQjtJQUpoQztRQUtxQixZQUFPLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDMUMsZUFBVSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNqRCxVQUFLLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDckMsVUFBSyxHQUFHLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0tBbUNsRTtJQWpDVSxTQUFTLENBQ1osSUFBd0IsRUFDeEIsRUFDSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQzVCLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsTUFDRyxJQUFJLENBQUMsT0FBTztRQUV6RCxNQUFNLGFBQWEsR0FBRywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxNQUFNLGVBQWUsR0FBRyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxPQUFPLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMvQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQzdELElBQUksSUFBSSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbEMsT0FBTztvQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLE9BQU8sRUFBRSxxQkFBcUI7aUJBQ2pDLENBQUM7YUFDTDtZQUVELElBQUksSUFBSSxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDaEMsT0FBTztvQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLE9BQU8sRUFBRSxHQUFHLHNCQUFzQixHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFO2lCQUNuRyxDQUFDO2FBQ0w7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQzsrR0F0Q1EsbUJBQW1COzZHQUFuQixtQkFBbUI7O1NBQW5CLG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQUovQixJQUFJO21CQUFDO29CQUNGLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUUsaUJBQWlCO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aW5qZWN0LCBQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q0hBUl9OT19CUkVBS19TUEFDRX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9jb25zdGFudHMnO1xuaW1wb3J0IHtUVUlfRElHSVRBTF9JTkZPUk1BVElPTl9VTklUUywgVFVJX0lOUFVUX0ZJTEVfVEVYVFN9IGZyb20gJ0B0YWlnYS11aS9raXQvdG9rZW5zJztcbmltcG9ydCB0eXBlIHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgbWFwfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtUVUlfRklMRV9PUFRJT05TfSBmcm9tICcuLi9maWxlL2ZpbGUub3B0aW9ucyc7XG5pbXBvcnQgdHlwZSB7VHVpRmlsZUxpa2V9IGZyb20gJy4uL2ZpbGVzLnR5cGVzJztcbmltcG9ydCB7XG4gICAgdHVpQ3JlYXRlRmlsZUZvcm1hdFZhbGlkYXRvcixcbiAgICB0dWlDcmVhdGVGaWxlU2l6ZVZhbGlkYXRvcixcbn0gZnJvbSAnLi4vZmlsZXMudmFsaWRhdG9ycyc7XG5pbXBvcnQge1RVSV9JTlBVVF9GSUxFU19PUFRJT05TfSBmcm9tICcuLi9pbnB1dC1maWxlcy9pbnB1dC1maWxlcy5vcHRpb25zJztcblxuQFBpcGUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgbmFtZTogJ3R1aUZpbGVSZWplY3RlZCcsXG59KVxuZXhwb3J0IGNsYXNzIFR1aUZpbGVSZWplY3RlZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnMgPSBpbmplY3QoVFVJX0lOUFVUX0ZJTEVTX09QVElPTlMpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0U2l6ZSA9IGluamVjdChUVUlfRklMRV9PUFRJT05TKS5mb3JtYXRTaXplO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dCQgPSBpbmplY3QoVFVJX0lOUFVUX0ZJTEVfVEVYVFMpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdW5pdCQgPSBpbmplY3QoVFVJX0RJR0lUQUxfSU5GT1JNQVRJT05fVU5JVFMpO1xuXG4gICAgcHVibGljIHRyYW5zZm9ybShcbiAgICAgICAgZmlsZTogVHVpRmlsZUxpa2UgfCBudWxsLFxuICAgICAgICB7XG4gICAgICAgICAgICBhY2NlcHQgPSB0aGlzLm9wdGlvbnMuYWNjZXB0LFxuICAgICAgICAgICAgbWF4RmlsZVNpemUgPSB0aGlzLm9wdGlvbnMubWF4RmlsZVNpemUsXG4gICAgICAgIH06IHthY2NlcHQ/OiBzdHJpbmc7IG1heEZpbGVTaXplPzogbnVtYmVyfSA9IHRoaXMub3B0aW9ucyxcbiAgICApOiBPYnNlcnZhYmxlPFR1aUZpbGVMaWtlIHwgbnVsbD4ge1xuICAgICAgICBjb25zdCBzaXplVmFsaWRhdG9yID0gdHVpQ3JlYXRlRmlsZVNpemVWYWxpZGF0b3IobWF4RmlsZVNpemUpO1xuICAgICAgICBjb25zdCBmb3JtYXRWYWxpZGF0b3IgPSB0dWlDcmVhdGVGaWxlRm9ybWF0VmFsaWRhdG9yKGFjY2VwdCk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZmlsZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3RoaXMudGV4dCQsIHRoaXMudW5pdCRdKS5waXBlKFxuICAgICAgICAgICAgbWFwKChbe21heFNpemVSZWplY3Rpb25SZWFzb24sIGZvcm1hdFJlamVjdGlvblJlYXNvbn0sIHVuaXRzXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlICYmIGZvcm1hdFZhbGlkYXRvcihjb250cm9sKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZm9ybWF0UmVqZWN0aW9uUmVhc29uLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmaWxlICYmIHNpemVWYWxpZGF0b3IoY29udHJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGAke21heFNpemVSZWplY3Rpb25SZWFzb259JHtDSEFSX05PX0JSRUFLX1NQQUNFfSR7dGhpcy5mb3JtYXRTaXplKHVuaXRzLCBtYXhGaWxlU2l6ZSl9YCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==