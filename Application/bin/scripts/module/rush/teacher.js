export const _teacher = {
    "ce2b98ec": {
        picture: "./bin/images/tc pfp/307734422_6234166236598832_3171927445310504716_n.jpg",
        name: "Mr. Vincent Charles Victore",
        section: "GRADE 11 - TVL-ICT",
        balance: "--",
        advisory: {
            first_semester: "GRADE 11 - TVL-ICT",
            second_semester: "GRADE 11 - TVL-ICT"
        },
        schedule: {
            first_semester: [// monday:
            `
            <div class="sched_cell"></div>
            <div class="sched_cell">PROG 1 (ICT)</div>
            <div class="sched_cell">PROG 1 (FNB)</div>
            <div class="sched_cell" brk>RECESS</div>
            <div class="sched_cell">PROG 3 (ICT)</div>
            <div class="sched_cell">EMTECH (ABM A)</div>
            <div class="sched_cell" brk>LUNCH</div>
            <div class="sched_cell">EMTECH (ABM B)</div>
            <div class="sched_cell">PROG 3(FNB)</div>
            <div class="sched_cell"></div>`,
                        // tuesday:
            `
            <div class="sched_cell"></div>
            <div class="sched_cell">PROG 1 (ICT|CL2)</div>
            <div class="sched_cell">PROG 1 (FNB|CL2)</div>
            <div class="sched_cell" brk>RECESS</div>
            <div class="sched_cell">PROG 3 (ICT|CL1)</div>
            <div class="sched_cell">EMTECH(ABM A)</div>
            <div class="sched_cell" brk>LUNCH</div>
            <div class="sched_cell">St. Therese</div>
            <div class="sched_cell"></div>
            <div class="sched_cell"></div>`,
                        // wednesday:
            `
            <div class="sched_cell"></div>
            <div class="sched_cell">St. Teresa</div>
            <div class="sched_cell">PRG 1 (FNB)</div>
            <div class="sched_cell" brk>RECESS</div>
            <div class="sched_cell">EMTECH (ABM A)</div>
            <div class="sched_cell">PROG 3 (FNB)</div>
            <div class="sched_cell" brk>LUNCH</div>
            <div class="sched_cell">EMTECH (ABM B)</div>
            <div class="sched_cell"></div>
            <div class="sched_cell" fit-sched>EMTECH (ABM A,B)|PROG 3|PROG 1</div>`,
                        // thursday:
            `
            <div class="sched_cell"></div>
            <div class="sched_cell"></div>
            <div class="sched_cell"></div>
            <div class="sched_cell" brk>RECESS</div>
            <div class="sched_cell">HRO</div>
            <div class="sched_cell">PROG 3 (FNB|CL2)</div>
            <div class="sched_cell" brk>LUNCH</div>
            <div class="sched_cell"></div>
            <div class="sched_cell"></div>
            <div class="sched_cell"></div>`,
                        // friday:
            `
            <div class="sched_cell"></div>
            <div class="sched_cell">St. Teresa</div>
            <div class="sched_cell">PROG 1 (ICT)</div>
            <div class="sched_cell" brk>RECESS</div>
            <div class="sched_cell"></div>
            <div class="sched_cell">PROG 3 (ICT|RM)</div>
            <div class="sched_cell">St. Therese</div>
            <div class="sched_cell">EMTECH (ABM B)</div>
            <div class="sched_cell"></div>
            <div class="sched_cell"></div>`,
            ],
            second_semester: []
        }
    }
}

export class teacher {
    type = "Teacher";
    picture;
    name;
    section;
    balance;
    first_sem_advisory;
    second_sem_advisory;
    schedule

    isError = false;

    constructor(value)
    {
        try {
            this.picture = _teacher[value].picture
            this.name = _teacher[value].name
            this.section = _teacher[value].section
            this.balance = _teacher[value].balance
            this.first_sem_advisory = _teacher[value].advisory.first_semester
            this.second_sem_advisory = _teacher[value].advisory.second_semester
            this.schedule = _teacher[value].schedule
        }
        catch
        {
            this.isError = true;
        }
    }
}