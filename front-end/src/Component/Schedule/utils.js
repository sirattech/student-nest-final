import { dinnerTime, holidays } from "./data.js";

export default class Utils {
  static isHoliday(date) {
    const localeDate = date.toLocaleDateString();
    return (
      holidays.filter((holiday) => holiday.toLocaleDateString() === localeDate)
        .length > 0
    );
  }

  static isWeekend(date) {
    const day = date.getDay();
    return ;
  }

  static isDisableDate(date) {
    return Utils.isHoliday(date) || Utils.isWeekend(date);
  }

  static isDinner(date) {
    const hours = date.getHours();
    const minute = date.getMinutes();

    // var localeDate = date.toLocaleDateString();
   
    const day = date.getDay();
    
    // console.log("day", day == 0 );
    return dinnerTime.filter((lol)=> {
      if(lol.from!==''){
        var fhrs = parseInt(lol.from.split(':')[0]);
        var fmins = parseInt(lol.from.split(':')[1]);
      }
      if(lol.to!==''){
        var thrs = parseInt(lol.to.split(':')[0]);
        var tmins = parseInt(lol.to.split(':')[1]);
      }
      
      // console.log("hours", parseInt(hrs));
      return  !((hours >= fhrs && hours < thrs)  ) && (lol.date === day)
    }).length>0
    // (hours >= fhrs && hours < thrs)
    // && (minute >= fmins && minute<tmins)
    // !(hours >= lol.from && hours  <lol.to) && ( lol.date == day)).length>0
    // !(hours >= lol.from && hours  <lol.to) && (lol.date.toLocaleDateString() === localeDate).length>0)
    // &&  (lol.date.toLocaleDateString() === localeDate).length>0 





    // var currentDate = dinnerTime.dates;
    // let fuckyou = ;
    // console.log("fuck you",currentDate.length);
    
    // console.log("bbb",hours >= dinnerTime.from && hours < dinnerTime.to && currentDate.filter((lol) => localeDate == lol.toLocaleDateString()));
    
    //  !(hours >= dinnerTime.from && hours < dinnerTime.to) && currentDate.filter((lol) => lol.toLocaleDateString() === localeDate ).length > 0 
    // console.log(holidays.toLocaleDateString()== localeDate);

    //  let ssss= currentDate.toLocaleDateString()
    //
  }

  static hasCoffeeCupIcon(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return hours === dinnerTime.from && minutes === 0;
  }

  static isValidAppointment(component, appointmentData) {
    const startDate = new Date(appointmentData.startDate);
    const endDate = new Date(appointmentData.endDate);
    const cellDuration = component.option("cellDuration");
    return Utils.isValidAppointmentInterval(startDate, endDate, cellDuration);
  }

  static isValidAppointmentInterval(startDate, endDate, cellDuration) {
    const edgeEndDate = new Date(endDate.getTime() - 1);

    if (!Utils.isValidAppointmentDate(edgeEndDate)) {
      return false;
    }

    const durationInMs = cellDuration * 60 * 1000;
    const date = startDate;
    while (date <= endDate) {
      if (!Utils.isValidAppointmentDate(date)) {
        return false;
      }
      const newDateTime = date.getTime() + durationInMs - 1;
      date.setTime(newDateTime);
    }

    return true;
  }

  static isValidAppointmentDate(date) {
    return (
      !Utils.isHoliday(date) && !Utils.isDinner(date) && !Utils.isWeekend(date)
    );
  }
}
