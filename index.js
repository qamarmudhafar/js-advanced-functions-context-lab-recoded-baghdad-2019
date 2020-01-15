/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }

}

function createEmployees(arr) {
    return arr.map(r => createEmployeeRecord(r));
}

function createTimeInEvent(dateStamp) {
    let [date, time] = dateStamp.split(' ');
    this.timeInEvents.push({ type: 'TimeIn', hour: parseInt(time), date });
    return this;
}

function createTimeOutEvent(dateStamp) {
    let [date, time] = dateStamp.split(' ');
    this.timeOutEvents.push({ type: 'TimeOut', hour: parseInt(time), date });
    return this;
}

function hoursWorkedOnDate(givenDate) {
    let timeIn = this.timeInEvents.find(t => t.date === givenDate);
    let timeOut = this.timeOutEvents.find(t => t.date === givenDate)
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(givenDate) {
    let wages = hoursWorkedOnDate.call(this, givenDate) * this.payPerHour;
    return parseFloat(wages);
}
let allWagesFor = function() {
    let eligibleDates = this.timeInEvents.map(e => e.date)
    let payable = eligibleDates.reduce(function(memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecords(record) {
    let records = record.map(r => createEmployeeRecord(r));
    return records;
}

function findEmployeebyFirstName(records, firstName) {
    return records.find(function(name) {
        return name.firstName === firstName;
    })
}
function calculatePayroll(records) {
    let payroll = records.reduce(function(init, record) {
        return init + allWagesFor.call(record);
    }, 0)
    return payroll;
}