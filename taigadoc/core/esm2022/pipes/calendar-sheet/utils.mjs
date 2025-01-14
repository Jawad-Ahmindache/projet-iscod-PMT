import { DAYS_IN_WEEK, TuiDay } from '@taiga-ui/cdk/date-time';
import { tuiInRange } from '@taiga-ui/cdk/utils/math';
/**
 * Computes day of week offset of the beginning of the month
 */
const getMonthStartDaysOffset = (month, firstDayOfWeek) => {
    const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();
    return startMonthOffsetFromSunday >= firstDayOfWeek
        ? startMonthOffsetFromSunday - firstDayOfWeek
        : DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
};
/**
 * Calculated day on a calendar grid
 * @return resulting day on these coordinates (could exceed passed month)
 */
export const getDayFromMonthRowCol = ({ month, rowIndex, colIndex, firstDayOfWeek, }) => {
    ngDevMode && console.assert(Number.isInteger(rowIndex));
    ngDevMode && console.assert(tuiInRange(rowIndex, 0, 6));
    ngDevMode && console.assert(Number.isInteger(colIndex));
    ngDevMode && console.assert(tuiInRange(colIndex, 0, DAYS_IN_WEEK));
    let day = rowIndex * DAYS_IN_WEEK +
        colIndex -
        getMonthStartDaysOffset(month, firstDayOfWeek) +
        1;
    if (day > month.daysCount) {
        day -= month.daysCount;
        month = month.append({ month: 1 });
    }
    if (day <= 0) {
        month = month.append({ month: -1 });
        day = month.daysCount + day;
    }
    return new TuiDay(month.year, month.month, day);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3BpcGVzL2NhbGVuZGFyLXNoZWV0L3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRXBEOztHQUVHO0FBQ0gsTUFBTSx1QkFBdUIsR0FBRyxDQUM1QixLQUFlLEVBQ2YsY0FBeUMsRUFDbkMsRUFBRTtJQUNSLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWpGLE9BQU8sMEJBQTBCLElBQUksY0FBYztRQUMvQyxDQUFDLENBQUMsMEJBQTBCLEdBQUcsY0FBYztRQUM3QyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsY0FBYyxHQUFHLDBCQUEwQixDQUFDLENBQUM7QUFDdkUsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxFQUNsQyxLQUFLLEVBQ0wsUUFBUSxFQUNSLFFBQVEsRUFDUixjQUFjLEdBZWpCLEVBQVUsRUFBRTtJQUNULFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN4RCxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN4RCxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBRW5FLElBQUksR0FBRyxHQUNILFFBQVEsR0FBRyxZQUFZO1FBQ3ZCLFFBQVE7UUFDUix1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDO1FBQzlDLENBQUMsQ0FBQztJQUVOLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUU7UUFDdkIsR0FBRyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNWLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNsQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7S0FDL0I7SUFFRCxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIkB0YWlnYS11aS90c2NvbmZpZy9uZy1kZXYtbW9kZVwiIC8+XG5pbXBvcnQgdHlwZSB7VHVpTW9udGh9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGF0ZS10aW1lJztcbmltcG9ydCB7REFZU19JTl9XRUVLLCBUdWlEYXl9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGF0ZS10aW1lJztcbmltcG9ydCB7dHVpSW5SYW5nZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9tYXRoJztcblxuLyoqXG4gKiBDb21wdXRlcyBkYXkgb2Ygd2VlayBvZmZzZXQgb2YgdGhlIGJlZ2lubmluZyBvZiB0aGUgbW9udGhcbiAqL1xuY29uc3QgZ2V0TW9udGhTdGFydERheXNPZmZzZXQgPSAoXG4gICAgbW9udGg6IFR1aU1vbnRoLFxuICAgIGZpcnN0RGF5T2ZXZWVrOiAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2LFxuKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCBzdGFydE1vbnRoT2Zmc2V0RnJvbVN1bmRheSA9IG5ldyBEYXRlKG1vbnRoLnllYXIsIG1vbnRoLm1vbnRoLCAxKS5nZXREYXkoKTtcblxuICAgIHJldHVybiBzdGFydE1vbnRoT2Zmc2V0RnJvbVN1bmRheSA+PSBmaXJzdERheU9mV2Vla1xuICAgICAgICA/IHN0YXJ0TW9udGhPZmZzZXRGcm9tU3VuZGF5IC0gZmlyc3REYXlPZldlZWtcbiAgICAgICAgOiBEQVlTX0lOX1dFRUsgLSAoZmlyc3REYXlPZldlZWsgLSBzdGFydE1vbnRoT2Zmc2V0RnJvbVN1bmRheSk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZWQgZGF5IG9uIGEgY2FsZW5kYXIgZ3JpZFxuICogQHJldHVybiByZXN1bHRpbmcgZGF5IG9uIHRoZXNlIGNvb3JkaW5hdGVzIChjb3VsZCBleGNlZWQgcGFzc2VkIG1vbnRoKVxuICovXG5leHBvcnQgY29uc3QgZ2V0RGF5RnJvbU1vbnRoUm93Q29sID0gKHtcbiAgICBtb250aCxcbiAgICByb3dJbmRleCxcbiAgICBjb2xJbmRleCxcbiAgICBmaXJzdERheU9mV2Vlayxcbn06IHtcbiAgICAvKipcbiAgICAgKiBjb2x1bW4gaW4gYSBjYWxlbmRhclxuICAgICAqL1xuICAgIGNvbEluZGV4OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogZmlyc3QgZGF5IG9mIHRoZSB3ZWVrIGluZGV4IChTdW5kYXkgLSAwLCBTYXR1cmRheSAtIDYpXG4gICAgICovXG4gICAgZmlyc3REYXlPZldlZWs6IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XG4gICAgbW9udGg6IFR1aU1vbnRoO1xuICAgIC8qKlxuICAgICAqIHJvdyBpbiBhIGNhbGVuZGFyXG4gICAgICovXG4gICAgcm93SW5kZXg6IG51bWJlcjtcbn0pOiBUdWlEYXkgPT4ge1xuICAgIG5nRGV2TW9kZSAmJiBjb25zb2xlLmFzc2VydChOdW1iZXIuaXNJbnRlZ2VyKHJvd0luZGV4KSk7XG4gICAgbmdEZXZNb2RlICYmIGNvbnNvbGUuYXNzZXJ0KHR1aUluUmFuZ2Uocm93SW5kZXgsIDAsIDYpKTtcbiAgICBuZ0Rldk1vZGUgJiYgY29uc29sZS5hc3NlcnQoTnVtYmVyLmlzSW50ZWdlcihjb2xJbmRleCkpO1xuICAgIG5nRGV2TW9kZSAmJiBjb25zb2xlLmFzc2VydCh0dWlJblJhbmdlKGNvbEluZGV4LCAwLCBEQVlTX0lOX1dFRUspKTtcblxuICAgIGxldCBkYXkgPVxuICAgICAgICByb3dJbmRleCAqIERBWVNfSU5fV0VFSyArXG4gICAgICAgIGNvbEluZGV4IC1cbiAgICAgICAgZ2V0TW9udGhTdGFydERheXNPZmZzZXQobW9udGgsIGZpcnN0RGF5T2ZXZWVrKSArXG4gICAgICAgIDE7XG5cbiAgICBpZiAoZGF5ID4gbW9udGguZGF5c0NvdW50KSB7XG4gICAgICAgIGRheSAtPSBtb250aC5kYXlzQ291bnQ7XG4gICAgICAgIG1vbnRoID0gbW9udGguYXBwZW5kKHttb250aDogMX0pO1xuICAgIH1cblxuICAgIGlmIChkYXkgPD0gMCkge1xuICAgICAgICBtb250aCA9IG1vbnRoLmFwcGVuZCh7bW9udGg6IC0xfSk7XG4gICAgICAgIGRheSA9IG1vbnRoLmRheXNDb3VudCArIGRheTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFR1aURheShtb250aC55ZWFyLCBtb250aC5tb250aCwgZGF5KTtcbn07XG4iXX0=