
/* eslint-disable func-style */
import React, { useEffect } from 'react';
import Scheduler from 'devextreme-react/scheduler';
import notify from 'devextreme/ui/notify';
import "./schedule.css"
import { data, holidays } from './data.js';
import Utils from './utils.js';
import DataCell from './DataCell.js';
import DataCellMonth from './DataCellMonth.js';
import DateCell from './DateCell.js';
import TimeCell from './TimeCell.js';
import List from 'devextreme-react/list';
import CustomStore from 'devextreme/data/custom_store';
import { BACKEND_URI } from "../../config/config";
import { Menu } from 'devextreme-react/menu';
import { format } from 'date-fns'
import {toSeconds,secondsToHmsssss} from "../../Convertor"
import 'whatwg-fetch';
const currentDate = new Date();
const views = ['week', 'month'];

const notifyDisableDate = () => {
  notify('User is not available this Time', 'warning', 2000);
};

function NewSchedule() {
  const [currentView, setCurrentView] = React.useState(views[0]);
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  let teacherSelect = JSON.parse(localStorage.getItem("teacherSelect"))
  let teacherName = JSON.parse(localStorage.getItem("teacherName"))
  // let email = teacherName.email
  let fName = teacherName.firstName;
  let lName = teacherName.lastName
  // console.log("teacherName", teacherName);
  const customDataSource = new CustomStore({
    load: () => {
      return fetch(`${BACKEND_URI}/schedule_googles/${teacherSelect}`).then(response => response.json()).catch(() => { throw 'Network error' })
    },
    insert: (values) => {
      let data = new Date(values.startDate)
      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      let startTime = format(new Date(values.startDate), 'kk:mm');
      let endTIme = format(new Date(values.EndDate), 'kk:mm')
      startTime = toSeconds(startTime)
      endTIme = toSeconds(endTIme)
      let mailSTartTime = secondsToHmsssss(startTime)
      let mailEndTime = secondsToHmsssss(endTIme)
     let  day = weekday[data.getDay()]
      let text = values.text;
      let startDate = values.startDate;
      let EndDate = values.EndDate;
      let allDay = values.AllDay;
      let description = values.description;
      let recurrenceRule = values.recurrenceRule;
      let dateTime = data.toDateString();
      let email = "bilalsattar55544@gmail.com"
      let value = {startDate,EndDate,allDay,description,recurrenceRule,teacherSelect,text,day,startTime,endTIme}
      let valueaaaa = {mailSTartTime,mailEndTime, email,description,text,day,recurrenceRule,fName,lName, dateTime }

       fetch(`${BACKEND_URI}/send_Reservation_Data`, {
        method: 'POST',
        body: JSON.stringify(valueaaaa),
        headers: {
          'Content-Type': 'application/json'
        }
       })
      return fetch(`${BACKEND_URI}/schedule_google`, {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(handleErrors)
        .then(response => {
          response.json()
        })
        .catch(() => { throw 'Network error' });
    },
    remove: (key) => {
      let ids = key._id
      console.log("keys", ids);
      return fetch(`${BACKEND_URI}/schedule_google/${ids}`, {
        method: 'DELETE',

      })
        .then(handleErrors)
        .catch(() => { throw 'Network error' });
    },
    update: (key, values) => {
      console.log("values", values.startDate);
      console.log("keys", key);
      let dataUpdate = new Date(values.startDate);
      let dateTime = dataUpdate.toDateString();
      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      let startTime = format(new Date(values.startDate), 'kk:mm');
      let endTIme = format(new Date(values.EndDate), 'kk:mm')
      let data = new Date(values.startDate);
      let recurrenceRule = values.recurrenceRule;
      let text = values.text;
      let description = values.description;
      let  day = weekday[data.getDay()]
      let email = "bilalsattar55544@gmail.com"
    let valueaaa = {startTime,endTIme, email,description,text,day,recurrenceRule}
    console.log("dataUpdate", valueaaa);
    fetch(`${BACKEND_URI}/send_Reservation_Update_Data`,{
        method: 'POST',
        body: JSON.stringify(valueaaa),
        headers: {
          'Content-Type': 'application/json'
        }
       })


    

      return fetch(`${BACKEND_URI}/schedule_google/${encodeURIComponent(key)}`, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(handleErrors)
        .catch(() => { throw 'Network error' });
    },


  })




  const onAppointmentFormOpening = (e) => {
    const startDate = new Date(e.appointmentData.startDate);
    if (!Utils.isValidAppointmentDate(startDate)) {
      e.cancel = true;
      notifyDisableDate();
    }
    applyDisableDatesToDateEditors(e.form);
  };

  const onAppointmentAdding = (e) => {
    const isValidAppointment = Utils.isValidAppointment(e.component, e.appointmentData);
    if (!isValidAppointment) {
      e.cancel = true;
      notifyDisableDate();
    }
  };

  const onAppointmentUpdating = (e) => {
    const isValidAppointment = Utils.isValidAppointment(e.component, e.newData);
    if (!isValidAppointment) {
      e.cancel = true;
      notifyDisableDate();
    }
  };

  const onCurrentViewChange = (value) => (setCurrentView(value));

  const applyDisableDatesToDateEditors = (form) => {
    // const startDateEditor = form.getEditor('startDate');
    // startDateEditor.option('disabledDates', holidays);

    // const endDateEditor = form.getEditor('endDate');
    // endDateEditor.option('disabledDates', holidays);
  };

  const renderDataCell = (itemData) => {
    const CellTemplate = currentView === 'month'
      ? DataCellMonth
      : DataCell;

    return <CellTemplate itemData={itemData} />;
  };

  const renderDateCell = (itemData) => <DateCell itemData={itemData} currentView={currentView} />;

  const renderTimeCell = (itemData) => <TimeCell itemData={itemData} />;

  useEffect(() => {
    renderDataCell()
  }, [])

//  const itemClick = (e) => {
//     const { itemData, itemElement, itemIndex } = e;
//     console.log("itemData", itemData);
    
// }


  return (
    <>
    <br/>
    {/* <Menu 
                onItemClick={itemClick}
            /> */}
    <div className='d-flex align-items-center'>
    <h5>Teacher Name:</h5> &nbsp;&nbsp;
    <h6>{`${teacherName.firstName} ${teacherName.lastName}`}</h6>
    </div>
    <Scheduler
      // timeZone="America/Los_Angeles"
      dataSource={customDataSource}
      views={views}
      defaultCurrentDate={currentDate}
      currentView={currentView}
      onCurrentViewChange={onCurrentViewChange}
      height={600}
      showAllDayPanel={true}
      // firstDayOfWeek={0}
      startDayHour={0}
      endDayHour={24}
      endDateExpr="EndDate"
      allDayExpr="AllDay"
      // remoteFiltering={true}
      dataCellRender={renderDataCell}
      dateCellRender={renderDateCell}
      timeCellRender={renderTimeCell}
      onAppointmentFormOpening={onAppointmentFormOpening}
      onAppointmentAdding={onAppointmentAdding}
      onAppointmentUpdating={onAppointmentUpdating}
    />

</>
  );
}

export default NewSchedule;









// import React, { useEffect, useState } from 'react'

//  import axios from "axios"
// import 'devextreme/dist/css/dx.light.css';
// import {Scheduler} from 'devextreme-react/scheduler';
// import List from 'devextreme-react/list';
// import CustomStore from 'devextreme/data/custom_store';
// import { BACKEND_URI } from "../../config/config";
// import 'whatwg-fetch';

// function NewSchedule() {
//   function handleErrors(response) {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }

// const currentDate = new Date();
// const views = ['day' ,'week', 'workWeek', 'month'];

// let teacherSelect = JSON.parse(localStorage.getItem("teacherSelect")) 
// console.log("teacherSelect", teacherSelect);

// const customDataSource = new CustomStore({
//   load: () => {
//       return fetch(`${BACKEND_URI}/schedule_googles/${teacherSelect}`).then(response =>response.json()).catch(() => { throw 'Network error' })
//   },
//   insert: (values) => {
//     console.log("values", values);
// let text = values.text;
// let startDate = values.startDate;
// let EndDate = values.EndDate;
// let allDay = values.AllDay;
// let description = values.description;
// let recurrenceRule = values.recurrenceRule
// let value = {teacherSelect,
//   text,
//   startDate,
//   EndDate,
//   allDay,
//   description,
//   recurrenceRule
// }
//     return fetch(`${BACKEND_URI}/schedule_google`, {
//         method: 'POST',
//         body: 
//         JSON.stringify(value),
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(handleErrors)
//     .then(response =>{
//       console.log(response);
//       response.json()})
//     .catch(() => { throw 'Network error' });
// },
// remove: (key) => {
//   let ids = key._id
//   console.log("keys", ids);
//   return fetch(`${BACKEND_URI}/schedule_google/${ids}`, {
//       method: 'DELETE',

//   })
//   .then(handleErrors)
//   .catch(() => { throw 'Network error' });
// },
// update: (key, values) => {
//   console.log("keys", key);
//   return fetch(`${BACKEND_URI}/schedule_google/${encodeURIComponent(key)}`, {
//       method: 'PUT',
//       body: JSON.stringify(values),
//       headers:{
//           'Content-Type': 'application/json'
//       }
//   })
//   .then(handleErrors)
//   .catch(() => { throw 'Network error' });
// },


// })


//   return (
//     <div>

//             <br/>
//       <Scheduler
//       id="scheduler"
//                 timeZone="America/Los_Angeles"
//                 dataSource={customDataSource}
//                 views={views}
//                 defaultCurrentView="day"
//                 defaultCurrentDate={currentDate}
//                 height={575}
//                 startDayHour={1}
//                 endDayHour={23}
//                 remoteFiltering={true}
//                 allowDelete = {true}

//                 endDateExpr="EndDate"
//                 allDayExpr="AllDay"

//                 />
//     </div>
//   )
// }

// export default NewSchedule
