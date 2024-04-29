export class Attendance {
    static template = `
<h1 ctr>ATTENDANCE REPORT</h1>
<div class="semester_schedule" style="border: 3px solid #000; border-radius: 10px;">
    <div class="sched_body">
        <div class="sched_row">
            <div class="sched_cell" ctr>MONTHS</div>
            <div class="sched_cell" title="AUGUST">A</div>
            <div class="sched_cell" title="SEPTEMBER">S</div>
            <div class="sched_cell" title="OCTOBER">O</div>
            <div class="sched_cell" title="NOVEMBER">N</div>
            <div class="sched_cell" title="DECEMBER">D</div>
            <div class="sched_cell" title="JANUARY">J</div>
            <div class="sched_cell" title="FEBRUARY">F</div>
            <div class="sched_cell" title="MARCH">M</div>
            <div class="sched_cell" title="APRIL">A</div>
            <div class="sched_cell" title="MAY">M</div>
            <div class="sched_cell" title="JUNE">J</div>
            <div class="sched_cell" ctr>TOTAL</div>
        </div>
        <div class="sched_row">
            <div class="sched_cell">Days Of School</div>
            <div class="sched_cell">14</div>
            <div class="sched_cell">24</div>
            <div class="sched_cell">24</div>
            <div class="sched_cell">21</div>
            <div class="sched_cell">11</div>
            <div class="sched_cell">22</div>
            <div class="sched_cell">22</div>
            <div class="sched_cell">17</div>
            <div class="sched_cell">22</div>
            <div class="sched_cell"></div>
            <div class="sched_cell"></div>
            <div class="sched_cell"></div>
        </div>
        <div class="sched_row">
            <div class="sched_cell">Days Present</div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present></div>
            <div class="sched_cell" data-present-total></div>
        </div>
        <div class="sched_row">
            <div class="sched_cell">Times Tardy</div>
            <div class="sched_cell" data-tardy>0</div>
            <div class="sched_cell" data-tardy>0</div>
            <div class="sched_cell" data-tardy>0</div>
            <div class="sched_cell" data-tardy>0</div>
            <div class="sched_cell" data-tardy>0</div>
            <div class="sched_cell" data-tardy>0</div>
            <div class="sched_cell" data-tardy>0</div>
            <div class="sched_cell" data-tardy>0</div>
            <div class="sched_cell" data-tardy></div>
            <div class="sched_cell" data-tardy></div>
            <div class="sched_cell" data-tardy></div>
            <div class="sched_cell" data-tardy></div>
        </div>
    </div>
</div>`
}