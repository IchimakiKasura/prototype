import { FirstSemester } from "./templates/first_sem_temp.js"
import { scanner } from "./module/scanner.js"
import { SecondSemester } from "./templates/second_sem_temp.js"
import { Attendance } from "./templates/attendance_temp.js"

scanner.onEnter()

// focuses on the input
document.querySelector(".informations").addEventListener("click", scanner.focused)
document.addEventListener("keydown", k=>{
    if(k.code=='Space')
    {
        k.preventDefault()
        scanner.focused()
    }
})

document.querySelectorAll("[data-fn='button']").forEach(e=>{
    e.addEventListener('click', ()=>{
        document.querySelectorAll("[data-fn='button']").forEach(eB=>{
            document.querySelectorAll("[data-navList]").forEach(eN=>{
                eN.setAttribute("data-show", "0")
            })
            eB.setAttribute("data-fnSelected", "0")
        })
        document.querySelectorAll("[data-navList]").forEach(eNav=>{
            if(eNav.getAttribute('class').match(e.getAttribute("data-target")))
                eNav.setAttribute("data-show", "1")
        })
        e.setAttribute("data-fnSelected", "1")
    })
})

document.querySelector("#rfid_code").addEventListener("blur", scanner.unfocused)

// apply bloat codes idk
export function applyTemplate(isStudent = true)
{
    document.querySelector(".first_sem_rec").innerHTML = FirstSemester.Schedule
    document.querySelector(".second_sem_rec").innerHTML = SecondSemester.Schedule

    if(!isStudent) return;
    
    document.querySelector(".first_sem_rec").innerHTML += FirstSemester.GradeTemplate
    document.querySelector(".second_sem_rec").innerHTML += SecondSemester.GradeTemplate
    document.querySelector(".attendance").innerHTML = Attendance.template
}

applyTemplate()