export const  toSeconds = (timeStr) =>{
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 3600 + minutes * 60;
  }


  export const secondsToHms =   (d) =>{
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    

    var hDisplay = h > 0 ? h : "";
    var mDisplay = m > 0 ? m : "";
    
    return hDisplay + ":" + mDisplay; 
}


export const secondsToHmsssss =   (d) =>{
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  

  var hDisplay = h > 0 ? h : "";
  var mDisplay = m > 0 ? m : "";
  // console.log();
     var zeroHdispaly = hDisplay <= 9 ? "0" + hDisplay : hDisplay
     var dZeroMdispaly =mDisplay == 0  ?  "00" : mDisplay
  return zeroHdispaly + ":" + dZeroMdispaly;  
}
// secondsToHmsssss(71400)