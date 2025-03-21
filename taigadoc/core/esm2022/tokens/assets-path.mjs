import { tuiCreateToken } from '@taiga-ui/cdk/utils/miscellaneous';
export const TUI_ASSETS_PATH = tuiCreateToken('assets/taiga-ui/icons');
export function tuiAssetsPathProvider(useValue) {
    return {
        provide: TUI_ASSETS_PATH,
        useValue,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLXBhdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3Rva2Vucy9hc3NldHMtcGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFakUsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRXZFLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxRQUFnQjtJQUNsRCxPQUFPO1FBQ0gsT0FBTyxFQUFFLGVBQWU7UUFDeEIsUUFBUTtLQUNYLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1ZhbHVlUHJvdmlkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0dWlDcmVhdGVUb2tlbn0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcblxuZXhwb3J0IGNvbnN0IFRVSV9BU1NFVFNfUEFUSCA9IHR1aUNyZWF0ZVRva2VuKCdhc3NldHMvdGFpZ2EtdWkvaWNvbnMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHR1aUFzc2V0c1BhdGhQcm92aWRlcih1c2VWYWx1ZTogc3RyaW5nKTogVmFsdWVQcm92aWRlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogVFVJX0FTU0VUU19QQVRILFxuICAgICAgICB1c2VWYWx1ZSxcbiAgICB9O1xufVxuIl19