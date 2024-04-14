"use strict";
import { students } from "./rush/student.js";
import { info } from "./info.js";

export class scanner
{
    static info_temp = new info()

    static unfocused()
    {
        // literally, what the actual fuck that is shit is a fix on that non-changing title bug?
        document.title = document.title.replace(/READY TO SCAN/g, "NOT READY TO SCAN")
        document.querySelector("#rfid_code").value = "" 
    }

    static focused()
    {
        document.title = document.title.replace(/NOT READY TO SCAN/g, "READY TO SCAN")
        document.querySelector("#rfid_code").focus()
    }

    static onEnter()
    {
        let rfid = document.querySelector("#rfid_code")

        rfid.addEventListener('keydown', k=>{
            if(k.code!='Enter') return;

            let data = new students(rfid.value)

            if(data.isError)
            {
                this.info_temp.type("NOT FOUND");
                this.info_temp.name("NOT FOUND");
                this.info_temp.year("0000-0000");
                this.info_temp.section("NOT FOUND");
                this.info_temp.id("0000-000000");
                this.info_temp.balance(0);

                rfid.value = ""
                return;
            }

            if(data.picture) document.querySelector("#person_picture").src = data.picture;
            
            this.info_temp.type(data.type);
            this.info_temp.name(data.name);
            this.info_temp.year(data.year);
            this.info_temp.section(data.section);
            this.info_temp.id(data.person_no);
            this.info_temp.balance(data.balance);

            this.#placevalues(data);

            rfid.value = ""
        })

    }

    static #placevalues(data)
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