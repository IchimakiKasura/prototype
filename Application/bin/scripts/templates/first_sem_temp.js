export class FirstSemester {
    
    static Schedule = `
<h1 sh>FIRST SEMESTER | ADVISER: <span id="class_adviser_1"></span></h1>
<br>
<h1 ctr>SCHEDULE</h1>
<div class="semester_schedule" style="border: 3px solid #000; border-radius: 10px;">
    <div class="sched_body">
        <div class="sched_row">
            <div class="sched_cell">TIME</div>
            <div class="sched_cell">7:00-8:00</div>
            <div class="sched_cell">8:00-9:00</div>
            <div class="sched_cell">9:00-10:00</div>
            <div class="sched_cell" vacant>10:00-10:30</div>
            <div class="sched_cell">10:30-11:30</div>
            <div class="sched_cell">11:30-12:30</div>
            <div class="sched_cell" vacant>12:30-1:30</div>
            <div class="sched_cell">1:30-2:30</div>
            <div class="sched_cell">2:30-3:30</div>
            <div class="sched_cell">3:30-4:30</div>
        </div>
        <div class="sched_row" data-sched-f>
            <div class="sched_cell">MONDAY</div>
        </div>
        <div class="sched_row" data-sched-f>
            <div class="sched_cell">TUESDAY</div>
        </div>
        <div class="sched_row" data-sched-f>
            <div class="sched_cell">WEDNESDAY</div>
        </div>
        <div class="sched_row" data-sched-f>
            <div class="sched_cell">THURSDAY</div>
        </div>
        <div class="sched_row" data-sched-f>
            <div class="sched_cell">FRIDAY</div>
        </div>
    </div>
</div>
`
    
    static GradeTemplate = `
<br>
<h1 ctr gtmp>GRADES</h1>
<div class="divTable" style="border: 3px solid #000; border-radius: 10px;">
    <div class="divTableBody" data-grade-f>
        <div class="divTableRow">
            <div class="divTableCell" style="border-top-left-radius: 5px;">SUBJECTS</div>
            <div class="divTableCell">MID TERM</div>
            <div class="divTableCell" style="border-top-right-radius: 5px;">FINAL TERM</div>
        </div>
    </div>
</div>
`
}