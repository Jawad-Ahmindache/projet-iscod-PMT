import { MONTHS_IN_YEAR } from '@taiga-ui/cdk/date-time';
function getCycle(options) {
    return Array.from({ length: options.yearCycle }, (_, i) => Array.from({ length: MONTHS_IN_YEAR }, (_, month) => options.label +
        weekCount({ year: i, month, startingYear: options.startingYear }) *
            options.week));
}
function weekCount(options) {
    const firstOfMonth = new Date(options.year + options.startingYear, options.month, 1);
    const lastOfMonth = new Date(options.year + options.startingYear, options.month + 1, 0);
    const days = lastOfMonth.getDate() + (firstOfMonth.getDay() || 7) - 1;
    return Math.ceil(days / 7);
}
export const SCROLL_DEBOUNCE_TIME = 80;
export const YEARS_IN_ROW = 5;
export const STARTING_YEAR = 1900;
export const RANGE = 196;
export const BUFFER = 500;
export const ANDROID_LABEL = 64;
export const ANDROID_WEEK = 48;
export const IOS_LABEL = 50;
export const IOS_WEEK = 50;
export const YEARLY_CYCLE = 28;
export const ANDROID_CYCLE = getCycle({
    label: ANDROID_LABEL,
    week: ANDROID_WEEK,
    yearCycle: YEARLY_CYCLE,
    startingYear: STARTING_YEAR,
});
export const IOS_CYCLE = getCycle({
    label: IOS_LABEL,
    week: IOS_WEEK,
    yearCycle: YEARLY_CYCLE,
    startingYear: STARTING_YEAR,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWNhbGVuZGFyLmNvbnN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tbW9iaWxlL2NvbXBvbmVudHMvbW9iaWxlLWNhbGVuZGFyL21vYmlsZS1jYWxlbmRhci5jb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsU0FBUyxRQUFRLENBQUMsT0FLakI7SUFDRyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ3BELEtBQUssQ0FBQyxJQUFJLENBQ04sRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQ3hCLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ1QsT0FBTyxDQUFDLEtBQUs7UUFDYixTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksRUFBQyxDQUFDO1lBQzNELE9BQU8sQ0FBQyxJQUFJLENBQ3ZCLENBQ0osQ0FBQztBQUNOLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxPQUE0RDtJQUMzRSxNQUFNLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRixNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FDeEIsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxFQUNuQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDakIsQ0FBQyxDQUNKLENBQUM7SUFDRixNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXRFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztBQUN2QyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUN6QixNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQzFCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDaEMsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUMvQixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDM0IsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUUvQixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLEtBQUssRUFBRSxhQUFhO0lBQ3BCLElBQUksRUFBRSxZQUFZO0lBQ2xCLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFlBQVksRUFBRSxhQUFhO0NBQzlCLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxTQUFTLEVBQUUsWUFBWTtJQUN2QixZQUFZLEVBQUUsYUFBYTtDQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01PTlRIU19JTl9ZRUFSfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RhdGUtdGltZSc7XG5cbmZ1bmN0aW9uIGdldEN5Y2xlKG9wdGlvbnM6IHtcbiAgICBsYWJlbDogbnVtYmVyO1xuICAgIHdlZWs6IG51bWJlcjtcbiAgICB5ZWFyQ3ljbGU6IG51bWJlcjtcbiAgICBzdGFydGluZ1llYXI6IG51bWJlcjtcbn0pOiBSZWFkb25seUFycmF5PHJlYWRvbmx5IG51bWJlcltdPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogb3B0aW9ucy55ZWFyQ3ljbGV9LCAoXywgaSkgPT5cbiAgICAgICAgQXJyYXkuZnJvbShcbiAgICAgICAgICAgIHtsZW5ndGg6IE1PTlRIU19JTl9ZRUFSfSxcbiAgICAgICAgICAgIChfLCBtb250aCkgPT5cbiAgICAgICAgICAgICAgICBvcHRpb25zLmxhYmVsICtcbiAgICAgICAgICAgICAgICB3ZWVrQ291bnQoe3llYXI6IGksIG1vbnRoLCBzdGFydGluZ1llYXI6IG9wdGlvbnMuc3RhcnRpbmdZZWFyfSkgKlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLndlZWssXG4gICAgICAgICksXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gd2Vla0NvdW50KG9wdGlvbnM6IHt5ZWFyOiBudW1iZXI7IG1vbnRoOiBudW1iZXI7IHN0YXJ0aW5nWWVhcjogbnVtYmVyfSk6IG51bWJlciB7XG4gICAgY29uc3QgZmlyc3RPZk1vbnRoID0gbmV3IERhdGUob3B0aW9ucy55ZWFyICsgb3B0aW9ucy5zdGFydGluZ1llYXIsIG9wdGlvbnMubW9udGgsIDEpO1xuICAgIGNvbnN0IGxhc3RPZk1vbnRoID0gbmV3IERhdGUoXG4gICAgICAgIG9wdGlvbnMueWVhciArIG9wdGlvbnMuc3RhcnRpbmdZZWFyLFxuICAgICAgICBvcHRpb25zLm1vbnRoICsgMSxcbiAgICAgICAgMCxcbiAgICApO1xuICAgIGNvbnN0IGRheXMgPSBsYXN0T2ZNb250aC5nZXREYXRlKCkgKyAoZmlyc3RPZk1vbnRoLmdldERheSgpIHx8IDcpIC0gMTtcblxuICAgIHJldHVybiBNYXRoLmNlaWwoZGF5cyAvIDcpO1xufVxuXG5leHBvcnQgY29uc3QgU0NST0xMX0RFQk9VTkNFX1RJTUUgPSA4MDtcbmV4cG9ydCBjb25zdCBZRUFSU19JTl9ST1cgPSA1O1xuZXhwb3J0IGNvbnN0IFNUQVJUSU5HX1lFQVIgPSAxOTAwO1xuZXhwb3J0IGNvbnN0IFJBTkdFID0gMTk2O1xuZXhwb3J0IGNvbnN0IEJVRkZFUiA9IDUwMDtcbmV4cG9ydCBjb25zdCBBTkRST0lEX0xBQkVMID0gNjQ7XG5leHBvcnQgY29uc3QgQU5EUk9JRF9XRUVLID0gNDg7XG5leHBvcnQgY29uc3QgSU9TX0xBQkVMID0gNTA7XG5leHBvcnQgY29uc3QgSU9TX1dFRUsgPSA1MDtcbmV4cG9ydCBjb25zdCBZRUFSTFlfQ1lDTEUgPSAyODtcblxuZXhwb3J0IGNvbnN0IEFORFJPSURfQ1lDTEUgPSBnZXRDeWNsZSh7XG4gICAgbGFiZWw6IEFORFJPSURfTEFCRUwsXG4gICAgd2VlazogQU5EUk9JRF9XRUVLLFxuICAgIHllYXJDeWNsZTogWUVBUkxZX0NZQ0xFLFxuICAgIHN0YXJ0aW5nWWVhcjogU1RBUlRJTkdfWUVBUixcbn0pO1xuXG5leHBvcnQgY29uc3QgSU9TX0NZQ0xFID0gZ2V0Q3ljbGUoe1xuICAgIGxhYmVsOiBJT1NfTEFCRUwsXG4gICAgd2VlazogSU9TX1dFRUssXG4gICAgeWVhckN5Y2xlOiBZRUFSTFlfQ1lDTEUsXG4gICAgc3RhcnRpbmdZZWFyOiBTVEFSVElOR19ZRUFSLFxufSk7XG4iXX0=