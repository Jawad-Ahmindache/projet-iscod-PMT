import { inject } from '@angular/core';
import { WA_WINDOW } from '@ng-web-apis/common';
import { tuiCreateTokenFromFactory, tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
/**
 * Viewport accessor
 */
export const TUI_VIEWPORT = tuiCreateTokenFromFactory(() => {
    const win = inject(WA_WINDOW);
    return {
        type: 'viewport',
        getClientRect() {
            const rect = {
                top: 0,
                left: 0,
                right: win.innerWidth,
                bottom: win.innerHeight,
                width: win.innerWidth,
                height: win.innerHeight,
                x: 0,
                y: 0,
            };
            return {
                ...rect,
                toJSON: () => JSON.stringify(rect),
            };
        },
    };
});
export function tuiAsViewport(accessor) {
    return tuiProvide(TUI_VIEWPORT, accessor);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3Rva2Vucy92aWV3cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMseUJBQXlCLEVBQUUsVUFBVSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFHeEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcseUJBQXlCLENBQWtCLEdBQUcsRUFBRTtJQUN4RSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFOUIsT0FBTztRQUNILElBQUksRUFBRSxVQUFVO1FBQ2hCLGFBQWE7WUFDVCxNQUFNLElBQUksR0FBRztnQkFDVCxHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsQ0FBQztnQkFDUCxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVU7Z0JBQ3JCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVztnQkFDdkIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVO2dCQUNyQixNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVc7Z0JBQ3ZCLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2FBQ1AsQ0FBQztZQUVGLE9BQU87Z0JBQ0gsR0FBRyxJQUFJO2dCQUNQLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUNyQyxDQUFDO1FBQ04sQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sVUFBVSxhQUFhLENBQUMsUUFBK0I7SUFDekQsT0FBTyxVQUFVLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UHJvdmlkZXIsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXQV9XSU5ET1d9IGZyb20gJ0BuZy13ZWItYXBpcy9jb21tb24nO1xuaW1wb3J0IHt0dWlDcmVhdGVUb2tlbkZyb21GYWN0b3J5LCB0dWlQcm92aWRlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHR5cGUge1R1aVJlY3RBY2Nlc3Nvcn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY2xhc3Nlcyc7XG5cbi8qKlxuICogVmlld3BvcnQgYWNjZXNzb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFRVSV9WSUVXUE9SVCA9IHR1aUNyZWF0ZVRva2VuRnJvbUZhY3Rvcnk8VHVpUmVjdEFjY2Vzc29yPigoKSA9PiB7XG4gICAgY29uc3Qgd2luID0gaW5qZWN0KFdBX1dJTkRPVyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAndmlld3BvcnQnLFxuICAgICAgICBnZXRDbGllbnRSZWN0KCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICByaWdodDogd2luLmlubmVyV2lkdGgsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB3aW4uaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpbi5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luLmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucmVjdCxcbiAgICAgICAgICAgICAgICB0b0pTT046ICgpID0+IEpTT04uc3RyaW5naWZ5KHJlY3QpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9O1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0dWlBc1ZpZXdwb3J0KGFjY2Vzc29yOiBUeXBlPFR1aVJlY3RBY2Nlc3Nvcj4pOiBQcm92aWRlciB7XG4gICAgcmV0dXJuIHR1aVByb3ZpZGUoVFVJX1ZJRVdQT1JULCBhY2Nlc3Nvcik7XG59XG4iXX0=