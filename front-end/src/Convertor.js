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