import { tuiGetElementObscures } from '@taiga-ui/cdk/utils/dom';
/**
 * @internal
 */
export function tuiIsObscured(el, exceptSelector = 'tui-hints') {
    return !!tuiGetElementObscures(el)?.some((el) => !el.closest(exceptSelector));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtb2JzY3VyZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3V0aWxzL21pc2NlbGxhbmVvdXMvaXMtb2JzY3VyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFDLEVBQWUsRUFBRSxjQUFjLEdBQUcsV0FBVztJQUN2RSxPQUFPLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3R1aUdldEVsZW1lbnRPYnNjdXJlc30gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHVpSXNPYnNjdXJlZChlbDogSFRNTEVsZW1lbnQsIGV4Y2VwdFNlbGVjdG9yID0gJ3R1aS1oaW50cycpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0dWlHZXRFbGVtZW50T2JzY3VyZXMoZWwpPy5zb21lKChlbCkgPT4gIWVsLmNsb3Nlc3QoZXhjZXB0U2VsZWN0b3IpKTtcbn1cbiJdfQ==