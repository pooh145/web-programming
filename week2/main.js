const headline = document.getElementsByTagName("h1")
headline[4].inmerText = "หยุดพัก อาจารย์ไม่อยู่       "

const getByClass = document.getElementsByClassName
console.log (getByClass);

const c = window.confirm("ดู user agent หรือไม่")
if (c){

    window.alert("User agent:"+ navigator.userAgent);
}