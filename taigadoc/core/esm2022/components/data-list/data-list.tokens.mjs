import { tuiCreateToken, tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
/**
 * Content for tuiOption component
 */
export const TUI_OPTION_CONTENT = tuiCreateToken();
export function tuiAsOptionContent(useValue) {
    return {
        provide: TUI_OPTION_CONTENT,
        useValue,
    };
}
/**
 * Accessor for data-list options
 */
export const TUI_DATA_LIST_ACCESSOR = tuiCreateToken();
export function tuiAsDataListAccessor(accessor) {
    return tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor);
}
/**
 * DataList controller
 */
export const TUI_DATA_LIST_HOST = tuiCreateToken();
export function tuiAsDataListHost(host) {
    return tuiProvide(TUI_DATA_LIST_HOST, host);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1saXN0LnRva2Vucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy9kYXRhLWxpc3QvZGF0YS1saXN0LnRva2Vucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsY0FBYyxFQUFFLFVBQVUsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBaUI3RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUMzQixjQUFjLEVBRVgsQ0FBQztBQUVSLE1BQU0sVUFBVSxrQkFBa0IsQ0FDOUIsUUFBK0U7SUFFL0UsT0FBTztRQUNILE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsUUFBUTtLQUNYLENBQUM7QUFDTixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyxjQUFjLEVBQXVCLENBQUM7QUFFNUUsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFFBQW1DO0lBQ3JFLE9BQU8sVUFBVSxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLGNBQWMsRUFBNEIsQ0FBQztBQUU3RSxNQUFNLFVBQVUsaUJBQWlCLENBQUksSUFBOEI7SUFDL0QsT0FBTyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQcm92aWRlciwgVGVtcGxhdGVSZWYsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1R1aUNvbnRleHQsIFR1aUlkZW50aXR5TWF0Y2hlciwgVHVpU3RyaW5nSGFuZGxlcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay90eXBlcyc7XG5pbXBvcnQge3R1aUNyZWF0ZVRva2VuLCB0dWlQcm92aWRlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHR5cGUge1R1aVNpemVMLCBUdWlTaXplU30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHR5cGUge1BvbHltb3JwaGV1c0NvbnRlbnR9IGZyb20gJ0B0YWlnYS11aS9wb2x5bW9ycGhldXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFR1aURhdGFMaXN0QWNjZXNzb3I8VCA9IHVua25vd24+IHtcbiAgICBnZXRPcHRpb25zKGluY2x1ZGVEaXNhYmxlZD86IGJvb2xlYW4pOiByZWFkb25seSBUW107XG59XG5cbi8vIFRPRE86IENvbnNpZGVyIHJlZmFjdG9yaW5nIGNoZWNrT3B0aW9uLCBpdCBpcyBvbmx5IG5lZWRlZCBpbiBDb21ib0JveFxuZXhwb3J0IGludGVyZmFjZSBUdWlEYXRhTGlzdEhvc3Q8VD4ge1xuICAgIGNoZWNrT3B0aW9uPyhvcHRpb246IFQpOiB2b2lkO1xuICAgIGhhbmRsZU9wdGlvbj8ob3B0aW9uOiBUKTogdm9pZDtcbiAgICByZWFkb25seSBpZGVudGl0eU1hdGNoZXI/OiBUdWlJZGVudGl0eU1hdGNoZXI8VD47XG4gICAgcmVhZG9ubHkgc3RyaW5naWZ5PzogVHVpU3RyaW5nSGFuZGxlcjxUPjtcbiAgICByZWFkb25seSBzaXplPzogVHVpU2l6ZUwgfCBUdWlTaXplUztcbn1cblxuLyoqXG4gKiBDb250ZW50IGZvciB0dWlPcHRpb24gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBUVUlfT1BUSU9OX0NPTlRFTlQgPVxuICAgIHR1aUNyZWF0ZVRva2VuPFxuICAgICAgICBQb2x5bW9ycGhldXNDb250ZW50PFR1aUNvbnRleHQ8VGVtcGxhdGVSZWY8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+Pj5cbiAgICA+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0dWlBc09wdGlvbkNvbnRlbnQoXG4gICAgdXNlVmFsdWU6IFBvbHltb3JwaGV1c0NvbnRlbnQ8VHVpQ29udGV4dDxUZW1wbGF0ZVJlZjxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4+Pixcbik6IFByb3ZpZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBUVUlfT1BUSU9OX0NPTlRFTlQsXG4gICAgICAgIHVzZVZhbHVlLFxuICAgIH07XG59XG5cbi8qKlxuICogQWNjZXNzb3IgZm9yIGRhdGEtbGlzdCBvcHRpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBUVUlfREFUQV9MSVNUX0FDQ0VTU09SID0gdHVpQ3JlYXRlVG9rZW48VHVpRGF0YUxpc3RBY2Nlc3Nvcj4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHR1aUFzRGF0YUxpc3RBY2Nlc3NvcihhY2Nlc3NvcjogVHlwZTxUdWlEYXRhTGlzdEFjY2Vzc29yPik6IFByb3ZpZGVyIHtcbiAgICByZXR1cm4gdHVpUHJvdmlkZShUVUlfREFUQV9MSVNUX0FDQ0VTU09SLCBhY2Nlc3Nvcik7XG59XG5cbi8qKlxuICogRGF0YUxpc3QgY29udHJvbGxlclxuICovXG5leHBvcnQgY29uc3QgVFVJX0RBVEFfTElTVF9IT1NUID0gdHVpQ3JlYXRlVG9rZW48VHVpRGF0YUxpc3RIb3N0PHVua25vd24+PigpO1xuXG5leHBvcnQgZnVuY3Rpb24gdHVpQXNEYXRhTGlzdEhvc3Q8VD4oaG9zdDogVHlwZTxUdWlEYXRhTGlzdEhvc3Q8VD4+KTogUHJvdmlkZXIge1xuICAgIHJldHVybiB0dWlQcm92aWRlKFRVSV9EQVRBX0xJU1RfSE9TVCwgaG9zdCk7XG59XG4iXX0=