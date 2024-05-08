import { students } from "../Application/bin/scripts/module/rush/student.js"
import { _grades } from "../Application/bin/scripts/module/rush/grades.js"
import { act_peta } from "../Application/bin/scripts/templates/act_peta_temp.js";

let userLogged = GetURLParameter("htaUsername")

// gets the information from the url parameters from the form after being submitted
function GetURLParameter(parameters)
{
    var pageURL = window.location.search.substring(1)
    var urlVars = pageURL.split('&')
    for (var i = 0; i < urlVars.length; i++) 
    {
        var paramName = urlVars[i].split('=')
        if (paramName[0] == parameters) 
            return decodeURIComponent(paramName[1])
    }
}

function setInformations()
{
    if(userLogged == undefined) location.href = "./login/index.html"

    Object.keys(students.allStudents).forEach(keys=>{
        if(students.allStudents[keys].person_no == userLogged)
            userLogged = keys
    })

    let st = new students(userLogged);

    document.querySelector("#userpfp").src = `../Application/${st.picture}`;
    document.querySelector("#nameplate").textContent = st.name;
    document.querySelector("#info_number").textContent = st.person_no;
    document.querySelector("#info_grade").textContent = st.web_grade;
    document.querySelector("#info_section").textContent = st.web_section;
    document.querySelector("#info_year").textContent = st.year;
    document.querySelector("#info_balance").textContent = `₱ ${parseInt(st.balance.replace("₱","")).toLocaleString()}`;
    document.querySelector("[data-grade-f]").innerHTML += _grades[st.section].first_semester;
    document.querySelector("[data-grade-s]").innerHTML += _grades[st.section].second_semester;
    document.querySelectorAll("[data-sched-f]").forEach((element, i)=>element.innerHTML += st.schedule.first_semester[i])
    document.querySelectorAll("[data-sched-s]").forEach((element, i)=>element.innerHTML += st.schedule.second_semester[i])
    
    let overAllAttendance = 0;
    document.querySelectorAll("[data-present]").forEach((element, index)=>{
        element.innerHTML = st.attendance[index]
        overAllAttendance += st.attendance[index]
    })
    document.querySelector("[data-present-total").textContent = overAllAttendance

    st.act.forEach(names=>document.querySelector("[data-actPeta]").innerHTML += act_peta.setActivity(names))

    let semester =[
        /*first sem*/
        [
            /*mid term*/
            {
                value: document.querySelectorAll("[f_m]"),
                target: st.grades.first_semester.MID
            },
            /*final term*/
            {
                value: document.querySelectorAll("[f_f]"),
                target: st.grades.first_semester.FINAL
            }
        ],
        /*second sem*/
        [
            /*mid term*/
            {
                value: document.querySelectorAll("[s_m]"),
                target: st.grades.second_semester.MID
            },
            /*final term*/
            {
                value: document.querySelectorAll("[s_f]"),
                target: st.grades.second_semester.FINAL
            }
        ]
    ]

    semester.forEach(term=>{ 
        term.forEach(grades=>{
            for(let i = 0; i < grades.value.length; i++)
                grades.value[i].innerText = grades.target[i]
        })
    })
}

class show
{
    static home = document.querySelector(".Home")
    static card = document.querySelector(".Card")
    static sched = document.querySelector(".Schedules")
    static tasks = document.querySelector(".Tasks")

    static Home(element)
    {
        this.home.setAttribute("data-show", 1)
        this.card.setAttribute("data-show", 0)
        this.sched.setAttribute("data-show", 0)
        this.tasks.setAttribute("data-show", 0)
        document.querySelectorAll("button").forEach(elem=>{
            if(elem != element)
                elem.setAttribute("data-clicked", 0)
        })
        element.setAttribute("data-clicked", 1)
    }   

    static Card(element)
    {
        this.home.setAttribute("data-show", 0)
        this.card.setAttribute("data-show", 1)
        this.sched.setAttribute("data-show", 0)
        this.tasks.setAttribute("data-show", 0)
        document.querySelectorAll("button").forEach(elem=>{
            if(elem != element)
                elem.setAttribute("data-clicked", 0)
        })
        element.setAttribute("data-clicked", 1)
    }

    static Sched(element)
    {
        this.home.setAttribute("data-show", 0)
        this.card.setAttribute("data-show", 0)
        this.sched.setAttribute("data-show", 1)
        this.tasks.setAttribute("data-show", 0)
        document.querySelectorAll("button").forEach(elem=>{
            if(elem != element)
                elem.setAttribute("data-clicked", 0)
        })
        element.setAttribute("data-clicked", 1)
    }

    static Tasks(element)
    {
        this.home.setAttribute("data-show", 0)
        this.card.setAttribute("data-show", 0)
        this.sched.setAttribute("data-show", 0)
        this.tasks.setAttribute("data-show", 1)
        document.querySelectorAll("button").forEach(elem=>{
            if(elem != element)
                elem.setAttribute("data-clicked", 0)
        })
        element.setAttribute("data-clicked", 1)
    }
}

window.show = show

setInformations()