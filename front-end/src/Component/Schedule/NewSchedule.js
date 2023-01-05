import React, { useEffect, useState } from 'react'
import Scheduler from 'devextreme-react/scheduler';
import { data } from '../../data';
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
// import 
function NewSchedule() {
    const currentDate = new Date();
    const views = ['day', 'week', 'workWeek', 'month'];
    
    const isNotEmpty = (value)=>{
        // console.log("value", value)
        return value !== undefined && value !== null && value !== "";
    }

    // const handleErrors = (response)=> {
    //     if (!response.ok) 
    //         throw Error(response.statusText);
    //     return response;
    // }
    function handleErrors(response) {
        if (!response.ok)
            throw Error(response.statusText);
        return response;
    }
    
    const schedulerDataSource = new DataSource({
        store: new CustomStore({
            load: (loadOptions) => {
                let params = "?";
                if("filter" in loadOptions && isNotEmpty(loadOptions["filter"])) 
                console.log("value", loadOptions);
                    // params = params.set(i, JSON.stringify(loadOptions[i]));
                params = params.slice(0, -1);
                
                }
        }),
        paginate: false
    });
        

    useEffect(()=>{
        isNotEmpty()
        // handleErrors()
    }, [])
  return (
    <div className='mt-4'>
        <Scheduler
        timeZone="Asia/Karachi"
        dataSource={data}
        // onOptionChanged={(e)=>setData(e.target)}
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={570}
        startDayHour={1} />
    </div>
  )
}

export default NewSchedule