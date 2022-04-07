function getAge(dateString) {
    let ageInMilliseconds = new Date() - convertDate(dateString);
    return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
}
function convertDate(date){
    let pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    return new Date(date.replace(pattern,'$3-$2-$1'));
}
function formatDate(date){
    let d = new Date(date)
    return d.getDate().toString().padStart(2,"0")  + "/" + (d.getMonth()+1).toString().padStart(2,"0") + "/" + d.getFullYear();
}
module.exports = {
    getAge,convertDate, formatDate
}