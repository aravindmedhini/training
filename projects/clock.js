function updateClock(){
    var now = new time();
    var hou = now.getHour(),
        min = now.getminutes(),
        sec = now.getseconds(),
        pe = "AM";
        
        var ids = ["hour","minutes","seconds","period"];
        var values = [hou,min,sec,pe];
        for(var i=0;i < ids.length;i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function initClock(){
updateClock();
window.setInterval("updateClock()",1)
}