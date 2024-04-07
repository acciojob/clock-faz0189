let para = document.querySelector("#timer")

setInterval (currentTime,1000)
function currentTime(){

    let date = new Date()
    let hour = date.getHours()

    let min = date.getMinutes()
    
    let sec = date.getSeconds()
    
    let day = date.getDay()

    let month = date.getMonth()

    let year = date.getFullYear()

    let time = hour+":"+min+":"+sec
    para.innerHTML = `${month}/${day}/${year}, ${time}`

    return `${month}/${day}/${year}, ${time}`
}

let ans = currentTime()


setInterval(currentTime,1000)
