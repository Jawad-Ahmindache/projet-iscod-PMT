import { TUI_FIRST_DAY, TUI_LAST_DAY } from '@taiga-ui/cdk/date-time';
export const TUI_DAY_CAPS_MAPPER = (current, value, maxLength, backwards) => {
    if (!value?.isSingleDay || !maxLength) {
        return backwards ? current || TUI_FIRST_DAY : current || TUI_LAST_DAY;
    }
    const negativeMaxLength = Object.fromEntries(Object.entries(maxLength).map(([key, value]) => [key, -value]));
    const dateShift = value.from
        .append(backwards ? negativeMaxLength : maxLength)
        .append({ day: !backwards ? -1 : 1 });
    if (backwards) {
        return dateShift.dayBefore(current || TUI_FIRST_DAY)
            ? current || TUI_FIRST_DAY
            : dateShift;
    }
    if (!current) {
        return dateShift;
    }
    return dateShift.dayAfter(current) ? current : dateShift;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LWNhcHMtbWFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvY2FsZW5kYXItcmFuZ2UvZGF5LWNhcHMtbWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxhQUFhLEVBQUUsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFHcEUsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBRzVCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDekMsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDbkMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUM7S0FDekU7SUFFRCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDakUsQ0FBQztJQUVGLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJO1NBQ3ZCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDakQsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUV4QyxJQUFJLFNBQVMsRUFBRTtRQUNYLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksYUFBYSxDQUFDO1lBQ2hELENBQUMsQ0FBQyxPQUFPLElBQUksYUFBYTtZQUMxQixDQUFDLENBQUMsU0FBUyxDQUFDO0tBQ25CO0lBRUQsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNWLE9BQU8sU0FBUyxDQUFDO0tBQ3BCO0lBRUQsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUM3RCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7VHVpRGF5LCBUdWlEYXlMaWtlLCBUdWlEYXlSYW5nZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kYXRlLXRpbWUnO1xuaW1wb3J0IHtUVUlfRklSU1RfREFZLCBUVUlfTEFTVF9EQVl9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGF0ZS10aW1lJztcbmltcG9ydCB0eXBlIHtUdWlNYXBwZXJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgVFVJX0RBWV9DQVBTX01BUFBFUjogVHVpTWFwcGVyPFxuICAgIFtUdWlEYXkgfCBudWxsLCBUdWlEYXlSYW5nZSB8IG51bGwsIFR1aURheUxpa2UgfCBudWxsLCBib29sZWFuXSxcbiAgICBUdWlEYXlcbj4gPSAoY3VycmVudCwgdmFsdWUsIG1heExlbmd0aCwgYmFja3dhcmRzKSA9PiB7XG4gICAgaWYgKCF2YWx1ZT8uaXNTaW5nbGVEYXkgfHwgIW1heExlbmd0aCkge1xuICAgICAgICByZXR1cm4gYmFja3dhcmRzID8gY3VycmVudCB8fCBUVUlfRklSU1RfREFZIDogY3VycmVudCB8fCBUVUlfTEFTVF9EQVk7XG4gICAgfVxuXG4gICAgY29uc3QgbmVnYXRpdmVNYXhMZW5ndGggPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG1heExlbmd0aCkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIC12YWx1ZV0pLFxuICAgICk7XG5cbiAgICBjb25zdCBkYXRlU2hpZnQgPSB2YWx1ZS5mcm9tXG4gICAgICAgIC5hcHBlbmQoYmFja3dhcmRzID8gbmVnYXRpdmVNYXhMZW5ndGggOiBtYXhMZW5ndGgpXG4gICAgICAgIC5hcHBlbmQoe2RheTogIWJhY2t3YXJkcyA/IC0xIDogMX0pO1xuXG4gICAgaWYgKGJhY2t3YXJkcykge1xuICAgICAgICByZXR1cm4gZGF0ZVNoaWZ0LmRheUJlZm9yZShjdXJyZW50IHx8IFRVSV9GSVJTVF9EQVkpXG4gICAgICAgICAgICA/IGN1cnJlbnQgfHwgVFVJX0ZJUlNUX0RBWVxuICAgICAgICAgICAgOiBkYXRlU2hpZnQ7XG4gICAgfVxuXG4gICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICAgIHJldHVybiBkYXRlU2hpZnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGVTaGlmdC5kYXlBZnRlcihjdXJyZW50KSA/IGN1cnJlbnQgOiBkYXRlU2hpZnQ7XG59O1xuIl19