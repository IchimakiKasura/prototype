let test = {
    "9e942c56": {
        picture: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/174303768_4016170305087700_4544122432954312130_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-xTxBCE8Li_AAFK904KMqwx7zYm57h4HDHvNibnuHge1ix5GYmzWZ71ZRvydEBefpFTNBNvbGyjFttiErqc1t&_nc_ohc=TyAB1B5CNDAAX9JhSOw&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfBNZx2UD1DlHiQH6_dHIfTPUGfCLbZGpTEnuxs3NQIsDg&oe=663223F3",
        type: "STUDENT",
        name: "KEAN JAMES D. PEPITO",
        year: "2019-2020",
        section: "GRADE 10 - NIGHT HIGHSCHOOL",
        number: "2019-000479"
    },
    "17e92714": {
        picture: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.6435-9/165910076_3963376453700419_6745039434552401318_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeETrZxaxW1Horu_fzIbPKgtHUWPCBeBIkwdRY8IF4EiTCKKYigVFMBo85Qn8ZgtVg_VEIOvO6VpjIuBlqQB-l4F&_nc_ohc=6MvW7emGOiUAX8U-QeB&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfDds-I7ri8EyIsuyM4dM0qsXKQjQjob8LpNizKiG8_yxw&oe=66322880",
        type: "STUDENT",
        name: "KEAN JAMES D. PEPITO",
        year: "2023-2024",
        section: "GRADE 11 - TECHVOC ICT",
        number: "2019-000479"
    },
    "143ef832": {
        picture: "",
        type: "STUDENT",
        name: "PAUL JEFFERSON ALDRINE GABION",
        year: "2023-2024",
        section: "GRADE 11 - TECHVOC ICT",
        number: "2023-000458"
    }
}

class scanner
{
    static unfocused()
    {
        document.querySelector("title").innerText = `Holy Trinity Academy [DATABASE] | NOT READY TO SCAN`
    }

    static focused()
    {
        document.querySelector("#rfid_code").focus()
        document.querySelector("title").innerText = `Holy Trinity Academy [DATABASE] | READY TO SCAN`
    }

    static onEnter()
    {
        let rfid = document.querySelector("#rfid_code")

        rfid.addEventListener('keydown', k=>{
            if(k.code!='Enter') return;

            let dataCollected = test[rfid.value]

            if(dataCollected == null) return;

            document.querySelector("#person_picture").src = dataCollected.picture
            document.querySelector("#TYPE_TEXT").children[0].innerText = dataCollected.type
            document.querySelector("#NAME_TEXT").children[0].innerText = dataCollected.name
            document.querySelector("#YEAR_TEXT").children[0].innerText = dataCollected.year
            document.querySelector("#SECTION_TEXT").children[0].innerText = dataCollected.section
            document.querySelector("#ID_TEXT").children[0].innerText = dataCollected.number

            rfid.value = ""
        })
    }
}