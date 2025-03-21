import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';
/** Default values for hint options */
export const TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
    showDelay: 200,
    hideDelay: 500,
};
/**
 * Default parameters for dropdown hover directive
 */
export const TUI_DROPDOWN_HOVER_OPTIONS = tuiCreateToken(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
export function tuiDropdownHoverOptionsProvider(options) {
    return tuiProvideOptions(TUI_DROPDOWN_HOVER_OPTIONS, options, TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taG92ZXIub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvZGlyZWN0aXZlcy9kcm9wZG93bi9kcm9wZG93bi1ob3Zlci5vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQU9wRixzQ0FBc0M7QUFDdEMsTUFBTSxDQUFDLE1BQU0sa0NBQWtDLEdBQTRCO0lBQ3ZFLFNBQVMsRUFBRSxHQUFHO0lBQ2QsU0FBUyxFQUFFLEdBQUc7Q0FDakIsQ0FBQztBQUVGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsY0FBYyxDQUNwRCxrQ0FBa0MsQ0FDckMsQ0FBQztBQUVGLE1BQU0sVUFBVSwrQkFBK0IsQ0FDM0MsT0FBeUM7SUFFekMsT0FBTyxpQkFBaUIsQ0FDcEIsMEJBQTBCLEVBQzFCLE9BQU8sRUFDUCxrQ0FBa0MsQ0FDckMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UHJvdmlkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0dWlDcmVhdGVUb2tlbiwgdHVpUHJvdmlkZU9wdGlvbnN9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHVpRHJvcGRvd25Ib3Zlck9wdGlvbnMge1xuICAgIHJlYWRvbmx5IGhpZGVEZWxheTogbnVtYmVyO1xuICAgIHJlYWRvbmx5IHNob3dEZWxheTogbnVtYmVyO1xufVxuXG4vKiogRGVmYXVsdCB2YWx1ZXMgZm9yIGhpbnQgb3B0aW9ucyAqL1xuZXhwb3J0IGNvbnN0IFRVSV9EUk9QRE9XTl9IT1ZFUl9ERUZBVUxUX09QVElPTlM6IFR1aURyb3Bkb3duSG92ZXJPcHRpb25zID0ge1xuICAgIHNob3dEZWxheTogMjAwLFxuICAgIGhpZGVEZWxheTogNTAwLFxufTtcblxuLyoqXG4gKiBEZWZhdWx0IHBhcmFtZXRlcnMgZm9yIGRyb3Bkb3duIGhvdmVyIGRpcmVjdGl2ZVxuICovXG5leHBvcnQgY29uc3QgVFVJX0RST1BET1dOX0hPVkVSX09QVElPTlMgPSB0dWlDcmVhdGVUb2tlbihcbiAgICBUVUlfRFJPUERPV05fSE9WRVJfREVGQVVMVF9PUFRJT05TLFxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHR1aURyb3Bkb3duSG92ZXJPcHRpb25zUHJvdmlkZXIoXG4gICAgb3B0aW9uczogUGFydGlhbDxUdWlEcm9wZG93bkhvdmVyT3B0aW9ucz4sXG4pOiBQcm92aWRlciB7XG4gICAgcmV0dXJuIHR1aVByb3ZpZGVPcHRpb25zKFxuICAgICAgICBUVUlfRFJPUERPV05fSE9WRVJfT1BUSU9OUyxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgVFVJX0RST1BET1dOX0hPVkVSX0RFRkFVTFRfT1BUSU9OUyxcbiAgICApO1xufVxuIl19