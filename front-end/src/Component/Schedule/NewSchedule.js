
import React, { useEffect, useState } from 'react'

 import axios from "axios"
import 'devextreme/dist/css/dx.light.css';
import {Scheduler} from 'devextreme-react/scheduler';
import List from 'devextreme-react/list';
import CustomStore from 'devextreme/data/custom_store';
import { BACKEND_URI } from "../../config/config";
import 'whatwg-fetch';

function NewSchedule() {
  function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const currentDate = new Date();
const views = ['day' ,'week', 'workWeek', 'month'];

let teacherSelect = JSON.parse(localStorage.getItem("teacherSelect")) 
console.log("teacherSelect", teacherSelect);

const customDataSource = new CustomStore({
  // key: 'ID',
  load: () => {
      return fetch(`${BACKEND_URI}/schedule_googles/${teacherSelect}`).then(response =>response.json()).catch(() => { throw 'Network error' })
  },
  insert: (values) => {
    console.log("values", values);
let text = values.text;
let startDate = values.startDate;
let EndDate = values.EndDate;
let allDay = values.AllDay;
let description = values.description;
let recurrenceRule = values.recurrenceRule
let value = {teacherSelect,
  text,
  startDate,
  EndDate,
  allDay,
  description,
  recurrenceRule
}
    return fetch(`${BACKEND_URI}/schedule_google`, {
        method: 'POST',
        body: 
        JSON.stringify(value),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(handleErrors)
    .then(response =>{
      console.log(response);
      response.json()})
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
  console.log("keys", key);
  return fetch(`${BACKEND_URI}/schedule_google/${encodeURIComponent(key)}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers:{
          'Content-Type': 'application/json'
      }
  })
  .then(handleErrors)
  .catch(() => { throw 'Network error' });
},


})


  return (
    <div>

            <br/>
      <Scheduler
      id="scheduler"
                timeZone="America/Los_Angeles"
                dataSource={customDataSource}
                views={views}
                defaultCurrentView="day"
                defaultCurrentDate={currentDate}
                height={575}
                startDayHour={1}
                endDayHour={23}
                remoteFiltering={true}
                allowDelete = {true}
                // textExpr="Text"
                // startDateExpr="StartDate"
                // dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
                endDateExpr="EndDate"
                allDayExpr="AllDay"
                
                />
    </div>
  )
}

export default NewSchedule