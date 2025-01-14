import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';
export const TUI_PROGRESS_DEFAULT_OPTIONS = {
    color: null,
    size: 'm',
};
export const TUI_PROGRESS_OPTIONS = tuiCreateToken(TUI_PROGRESS_DEFAULT_OPTIONS);
export function tuiProgressOptionsProvider(options) {
    return tuiProvideOptions(TUI_PROGRESS_OPTIONS, options, TUI_PROGRESS_DEFAULT_OPTIONS);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLm9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBUXBGLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUF1QjtJQUM1RCxLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBRWpGLE1BQU0sVUFBVSwwQkFBMEIsQ0FDdEMsT0FBb0M7SUFFcEMsT0FBTyxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztBQUMxRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Byb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpQ3JlYXRlVG9rZW4sIHR1aVByb3ZpZGVPcHRpb25zfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHR5cGUge1R1aVNpemVYWEwsIFR1aVNpemVYWFN9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBUdWlQcm9ncmVzc09wdGlvbnMge1xuICAgIHJlYWRvbmx5IGNvbG9yOiBzdHJpbmcgfCBudWxsO1xuICAgIHJlYWRvbmx5IHNpemU6IFR1aVNpemVYWEwgfCBUdWlTaXplWFhTO1xufVxuXG5leHBvcnQgY29uc3QgVFVJX1BST0dSRVNTX0RFRkFVTFRfT1BUSU9OUzogVHVpUHJvZ3Jlc3NPcHRpb25zID0ge1xuICAgIGNvbG9yOiBudWxsLFxuICAgIHNpemU6ICdtJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUVUlfUFJPR1JFU1NfT1BUSU9OUyA9IHR1aUNyZWF0ZVRva2VuKFRVSV9QUk9HUkVTU19ERUZBVUxUX09QVElPTlMpO1xuXG5leHBvcnQgZnVuY3Rpb24gdHVpUHJvZ3Jlc3NPcHRpb25zUHJvdmlkZXIoXG4gICAgb3B0aW9uczogUGFydGlhbDxUdWlQcm9ncmVzc09wdGlvbnM+LFxuKTogUHJvdmlkZXIge1xuICAgIHJldHVybiB0dWlQcm92aWRlT3B0aW9ucyhUVUlfUFJPR1JFU1NfT1BUSU9OUywgb3B0aW9ucywgVFVJX1BST0dSRVNTX0RFRkFVTFRfT1BUSU9OUyk7XG59XG4iXX0=