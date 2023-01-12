
import React, { useEffect, useState } from 'react'

 import axios from "axios"
import 'devextreme/dist/css/dx.light.css';
import Scheduler from 'devextreme-react/scheduler';
import List from 'devextreme-react/list';
import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';
const url = 'http://localhost:8000';
function NewSchedule() {
  const isNotEmpty = (value) => value !== undefined && value !== null && value !== '';
  function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
 const [teacherId, setTeacherId] = useState()
const currentDate = new Date();
const views = ['day', 'workWeek', 'month'];
const userDataGet = async()=>{
  try{
await axios.get(`${url}/User_Data`).then((resdata)=>{
  // console.log("resdata", resdata.data.length);

  for(var i = 0;  i<= resdata.data.length;i++){
    // console.log("i", resdata?.data[i]?.role);
    if(resdata?.data[i]?.role == "Teacher"){
      // console.log("_id", );
      setTeacherId(resdata?.data[i]._id)
    }
  }
})
  }catch(e){
console.log("e", e);
  }
}

const customDataSource = new CustomStore({
  key: 'ID',
  // loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
  load: () => {
      return fetch(`${url}/schedule_googles`).then(handleErrors).then(response =>response.json()).catch(() => { throw 'Network error' })
  },
  insert: (values) => {
console.log("values", values);
let text = values.text;
let startDate = values.startDate;
let endDate = values.EndDate;
let allDay = values.AllDay;
let description = values.description;
let value = {teacherId,values}
    return fetch(`${url}/schedule_google`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(handleErrors)
    .catch(() => { throw 'Network error' });
},
// axios.post(`${url}/schedule_google`, {
    //   text,
    //   startDate,
    //   endDate,
    //   allDay,
    //   description
    // })
})


// const customDataSource = new CustomStore({
//   key: 'ID',
//   load: (loadOptions) => {
//       let params = '?';

//       [
//           'filter',
//           'group', 
//           'groupSummary',
//           'parentIds',
//           'requireGroupCount',
//           'requireTotalCount',
//           'searchExpr',
//           'searchOperation',
//           'searchValue',
//           'select',
//           'sort',
//           'skip',     
//           'take',
//           'totalSummary', 
//           'userData'
//       ].forEach(function(i) {
//           if(i in loadOptions && isNotEmpty(loadOptions[i])) {
//               params += `${i}=${JSON.stringify(loadOptions[i])}&`;
//           }
//       });
//       params = params.slice(0, -1);

//       return fetch(`https://mydomain.com/MyDataService${params}`)
//           .then(handleErrors)
//           .then(response => response.json())
//           .then(response => {
//               return {
//                   data: response.data,
//                   totalCount: response.totalCount,
//                   summary: response.summary,
//                   groupCount: response.groupCount
//               };
//           })
//           .catch(() => { throw 'Network error' });
//   },
//   // Needed to process selected value(s) in the SelectBox, Lookup, Autocomplete, and DropDownBox
//   // byKey: (key) => {
//   //     return fetch(`https://mydomain.com/MyDataService?id=${key}`)
//   //         .then(handleErrors);
//   // }
// });
useEffect(()=>{
  userDataGet()
},[])
  return (
    <div>

{/* <List
                dataSource={customDataSource}
            /> */}
      <Scheduler
                timeZone="America/Los_Angeles"
                dataSource={customDataSource}
                views={views}
                defaultCurrentView="day"
                defaultCurrentDate={currentDate}
                height={575}
                startDayHour={1}
                endDayHour={23}
                remoteFiltering={true}
                dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
                // textExpr="Text"
                // startDateExpr="StartDate"
                endDateExpr="EndDate"
                allDayExpr="AllDay"
                recurrenceRuleExpr="RecurrenceRule"
                recurrenceExceptionExpr="RecurrenceException" 
                />
    </div>
  )
}

export default NewSchedule
















// import React from 'react'
// import * as AspNetData from 'devextreme-aspnet-data-nojquery';
// import Scheduler from 'devextreme-react/scheduler';
// // import DataGrid, { RemoteOperations } from 'devextreme-react/data-grid';
// const url = 'http://localhost:8000';
// const dataSource = AspNetData.createStore({
//     key: 'AppointmentId',
//     loadUrl: `${url}/schedule_googles`,
//     insertUrl: `${url}/schedule_google`,
//     // updateUrl: `${url}/Put`,
//     // deleteUrl: `${url}/Delete`,
//     onBeforeSend(_, ajaxOptions) {
//         ajaxOptions.xhrFields = { withCredentials: false };
//     },
// });


// const currentDate = new Date();
// const views = ['day', 'workWeek', 'month'];

// function NewSchedule() {
//     return (
//         <div>
//             {/* <DataGrid
//                 dataSource={dataSource}>
//                 <RemoteOperations groupPaging={true}/>
//             </DataGrid> */}
//             <br/>
//             <Scheduler
//                 timeZone="America/Los_Angeles"
//                 dataSource={dataSource}
//                 views={views}
//                 defaultCurrentView="day"
//                 defaultCurrentDate={currentDate}
//                 height={575}
//                 startDayHour={1}
//                 endDayHour={23}
//                 remoteFiltering={true}
//                 dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
//                 // textExpr="Text"
//                 // startDateExpr="StartDate"
//                 endDateExpr="EndDate"
//                 allDayExpr="AllDay"
//                 recurrenceRuleExpr="RecurrenceRule"
//                 recurrenceExceptionExpr="RecurrenceException" 
//                 />
//         </div>
//     )
// }

// export default NewSchedule