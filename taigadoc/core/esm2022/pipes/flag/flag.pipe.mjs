import { inject, Pipe } from '@angular/core';
import { TUI_ASSETS_PATH } from '@taiga-ui/core/tokens';
import * as i0 from "@angular/core";
// TODO: Move to kit in v5
class TuiFlagPipe {
    constructor() {
        this.staticPath = inject(TUI_ASSETS_PATH);
    }
    transform(countryIsoCode) {
        if (!countryIsoCode) {
            return null;
        }
        return `${this.staticPath}/flags/${countryIsoCode.toLowerCase()}.svg`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFlagPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiFlagPipe, isStandalone: true, name: "tuiFlag" }); }
}
export { TuiFlagPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFlagPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiFlag',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9waXBlcy9mbGFnL2ZsYWcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBS3RELDBCQUEwQjtBQUMxQixNQUlhLFdBQVc7SUFKeEI7UUFLcUIsZUFBVSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQVl6RDtJQVBVLFNBQVMsQ0FBQyxjQUErQjtRQUM1QyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsVUFBVSxjQUFjLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztJQUMxRSxDQUFDOytHQVpRLFdBQVc7NkdBQVgsV0FBVzs7U0FBWCxXQUFXOzRGQUFYLFdBQVc7a0JBSnZCLElBQUk7bUJBQUM7b0JBQ0YsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRSxTQUFTO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aW5qZWN0LCBQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtUdWlMb29zZVVuaW9ufSBmcm9tICdAdGFpZ2EtdWkvY2RrL3R5cGVzJztcbmltcG9ydCB7VFVJX0FTU0VUU19QQVRIfSBmcm9tICdAdGFpZ2EtdWkvY29yZS90b2tlbnMnO1xuaW1wb3J0IHR5cGUge1R1aUNvdW50cnlJc29Db2RlfSBmcm9tICdAdGFpZ2EtdWkvaTE4bi90eXBlcyc7XG5cbnR5cGUgSXNvQ29kZSA9IFR1aUxvb3NlVW5pb248VHVpQ291bnRyeUlzb0NvZGU+O1xuXG4vLyBUT0RPOiBNb3ZlIHRvIGtpdCBpbiB2NVxuQFBpcGUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgbmFtZTogJ3R1aUZsYWcnLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlGbGFnUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhdGljUGF0aCA9IGluamVjdChUVUlfQVNTRVRTX1BBVEgpO1xuXG4gICAgcHVibGljIHRyYW5zZm9ybShjb3VudHJ5SXNvQ29kZTogSXNvQ29kZSk6IHN0cmluZztcbiAgICBwdWJsaWMgdHJhbnNmb3JtKGNvdW50cnlJc29Db2RlOiBJc29Db2RlIHwgdW5kZWZpbmVkKTogc3RyaW5nIHwgbnVsbDtcbiAgICBwdWJsaWMgdHJhbnNmb3JtKGNvdW50cnlJc29Db2RlPzogSXNvQ29kZSB8IG51bGwpOiBzdHJpbmcgfCBudWxsO1xuICAgIHB1YmxpYyB0cmFuc2Zvcm0oY291bnRyeUlzb0NvZGU/OiBJc29Db2RlIHwgbnVsbCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgICBpZiAoIWNvdW50cnlJc29Db2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnN0YXRpY1BhdGh9L2ZsYWdzLyR7Y291bnRyeUlzb0NvZGUudG9Mb3dlckNhc2UoKX0uc3ZnYDtcbiAgICB9XG59XG4iXX0=