const name = "window.prompt"("คุณชื่ออะไร");

if (userNamre !== null && userNamre !== "") {
  document.getElementById("show-name").innerText = "สวัสครับ" + userNamre;
}

function showUserAgent(){
    const userAgent = navigator.userAgent;
    window.alert("User Agent: " + userAgent);
}

function goToYoutube(){
    window.location.href = "https://www.youtube.com/";
}