let para = document.querySelector("#timer")


function currentTime(){

    let date = new Date()
    let hour = date.getHours()

    let min = date.getMinutes()
    
    let sec = date.getSeconds()
    let todayDate = date.getDate()

    let day = date.getDay()

    let month = date.getMonth()

    let year = date.getFullYear()

    let time = hour+":"+min+":"+sec
    para.innerHtml = `${month}/${day}/${year}, ${time}`

    return `${month}/${day}/${year}, ${time}`
}

let ans = currentTime()
alert(ans)

setInterval(currentTime,1000)//your JS code here. If required.
