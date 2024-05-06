"use strict";
import { students } from "./rush/student.js";
import { info } from "./info.js";
import { _grades } from "./rush/grades.js";
import { _schedule } from "./rush/schedules.js";
import { _teacher, teacher } from "./rush/teacher.js";
import { applyTemplate } from "../script.js";
import { act_peta } from "../templates/act_peta_temp.js";

export class scanner
{
    static info_temp = new info()
    static #lastID = null;

    static unfocused()
    {
        // literally, what the actual fuck that is shit is a fix on that non-changing title bug?
        document.title = document.title.replace(/\| READY TO SCAN \|/g, "| NOT READY TO SCAN |")
        document.querySelector("#rfid_code").value = "" 
    }

    static focused()
    {
        document.title = document.title.replace(/\| NOT READY TO SCAN \|/g, "| READY TO SCAN |")
        document.querySelector("#rfid_code").focus()
    }

    static onEnter()
    {
        let rfid = document.querySelector("#rfid_code")

        rfid.addEventListener('keydown', k=>{
            if(k.code!='Enter') return;
            
            // avoid double enters/tap?
            if(this.#lastID == rfid.value)
            {
                rfid.value = ""
                return
            }
    
            this.#lastID = rfid.value;

            let template1 = new students(rfid.value)
            let template2 = new teacher(rfid.value)
            let auto = document.querySelector("[data-target=nav_records]");
            
            // resets record tab
            applyTemplate()

            if(!template1.isError) {
                auto.click()
                return this.#student(template1, rfid);
            } else if(!template2.isError) {
                applyTemplate(false)
                auto.click()
                return this.#teacher(template2, rfid);
            } else {
                document.querySelector("#person_picture").src = "bin/images/info_DEFAULT_PFP.svg";
                this.info_temp.type("NOT FOUND");
                this.info_temp.name("NOT FOUND");
                this.info_temp.year("0000-0000");
                this.info_temp.section("NOT FOUND");
                this.info_temp.id("0000-000000");
                this.info_temp.balance(0);
    
                rfid.value = ""
                return;
            }
        })
    }

    static #student(data = new students, rfid = Element)
    {
        let actP = document.querySelector(".activities")

        actP.style = "border: 2px solid black"
        actP.innerHTML = act_peta.template;
        document.querySelector(".attendance").style = "border: 2px solid black"
        
        document.querySelector("#person_picture").src = data.picture ? data.picture : "bin/images/info_DEFAULT_PFP.svg";
        
        this.info_temp.type(data.type);
        this.info_temp.name(data.name);
        this.info_temp.year(data.year);
        this.info_temp.section(data.section);
        this.info_temp.id(data.person_no);
        this.info_temp.balance(data.balance);

        try {
            document.querySelector("[data-grade-f]").innerHTML += _grades[data.section].first_semester;
            document.querySelector("[data-grade-s]").innerHTML += _grades[data.section].second_semester;
            document.querySelectorAll("[data-sched-f]").forEach((element, i)=>element.innerHTML += data.schedule.first_semester[i])
            document.querySelectorAll("[data-sched-s]").forEach((element, i)=>element.innerHTML += data.schedule.second_semester[i])
        } catch
        {
            console.warn("%csample initiated.", "font-size: 30px; color: pink")
        }

        let overAllAttendance = 0;
        document.querySelectorAll("[data-present]").forEach((element, index)=>{
            element.innerHTML = data.attendance[index]
            overAllAttendance += data.attendance[index]
        })
        document.querySelector("[data-present-total").textContent = overAllAttendance

        Object.keys(_teacher).forEach(teachers=>{
            let tc = new teacher(teachers);
            
            if(data.section == tc.first_sem_advisory)
                document.querySelector("#class_adviser_1").textContent = tc.name;
            if(data.section == tc.second_sem_advisory)
                document.querySelector("#class_adviser_2").textContent = tc.name;
        })

        data.act.forEach(names=>document.querySelector("[data-actPeta]").innerHTML += act_peta.setActivity(names))

        this.#placevalues(data);

        rfid.value = ""
    }

    static #teacher(data = new teacher, rfid = Element)
    {
        let actP = document.querySelector(".activities")

        actP.style = "border: none"
        actP.innerHTML = ""
        document.querySelector(".attendance").style = "border: none"
        document.querySelector("#person_picture").src = data.picture ? data.picture : "bin/images/info_DEFAULT_PFP.svg";
        
        this.info_temp.type(data.type);
        this.info_temp.name(data.name);
        this.info_temp.year("--");
        this.info_temp.section(data.section);
        this.info_temp.id("--");
        this.info_temp.balance("--");

        document.querySelectorAll(".divTable").forEach(el=>el.remove())
        document.querySelectorAll("[gtmp]").forEach(el=>el.remove())
        
        // IT FOCKING DID IT AGAIN, IT WONT FUCKEN WORK AND NEEDS TO RE-ASSIGN THE VALUE?
        document.querySelectorAll("[sh]").forEach(el=>el.innerHTML = el.innerHTML.replace(/ADVISER/g,"CLASS"))

        document.querySelectorAll("[data-sched-f]").forEach((element, i)=>element.innerHTML += data.schedule.first_semester[i])
        document.querySelector("#class_adviser_1").textContent = data.first_sem_advisory;
        document.querySelector("#class_adviser_2").textContent = data.second_sem_advisory;

        document.querySelector(".attendance").innerHTML = "";

        rfid.value = ""
    }

    static #placevalues(data = new students)
    {
        let semester =[
            /*first sem*/
            [
                /*mid term*/
                {
                    value: document.querySelectorAll("[f_m]"),
                    target: data.grades.first_semester.MID
                },
                /*final term*/
                {
                    value: document.querySelectorAll("[f_f]"),
                    target: data.grades.first_semester.FINAL
                }
            ],
            /*second sem*/
            [
                /*mid term*/
                {
                    value: document.querySelectorAll("[s_m]"),
                    target: data.grades.second_semester.MID
                },
                /*final term*/
                {
                    value: document.querySelectorAll("[s_f]"),
                    target: data.grades.second_semester.FINAL
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
}