
// Let’s create an alarm.

// Create a key called weekendAlarm, with a value saying “no alarm
// needed”, and a key called weekdayAlarm, with a value saying “get
// up at 7am”

// Create a variable called day and one called alarm

// If day is Saturday or Sunday, set alarm to weekendAlarm

// If the day is a weekday, set alarm to weekdayAlarm

let day = "Saturday";
let alarm = {
    weekdayAlarm: "getup at 7am",
    weekendAlarm: "no alarm needed"
};
if ((day === "Saturday") || (day === "Sunday")){
    console.log(alarm.weekendAlarm);
} else {
    console.log(alarm.weekdayAlarm);
}
