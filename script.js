let prevbtn = document.querySelector("#prev")
let nextbtn = document.querySelector("#next")
let circles = document.querySelectorAll(".circle")
let lines = document.querySelectorAll(".line")

prevbtn.disabled = true

let totalCount = 0
for(let i of circles){
    totalCount++
}
let count = 0
nextbtn.addEventListener("click",()=>{
    if(count < totalCount-1){
        count++
        if(count == totalCount-1){
            nextbtn.disabled = true
        }
    }
    if(count > 0){
        prevbtn.disabled = false
    }
    let currCircle = circles[count]
    let currLine = lines[count-1]
    if(count < totalCount){
        currCircle.classList.add("active")
        currLine.style.cssText = `background-color: #3498DB;`
    }
})
prevbtn.addEventListener("click",()=>{
    let currCircle = circles[count]
    let currLine = lines[count-1]
    currCircle.classList.remove("active")
    currLine.style.cssText = `background-color: #ccc;`
    count--
    if(count == totalCount-2){
        nextbtn.disabled = false
    }
    if(count == 0){
        prevbtn.disabled = true
    }
})


