export class act_peta {
    static template = `
<h1 ctr>PETA / ACTIVITIES</h1>
<div class="semester_schedule" style="border: 3px solid #000; border-radius: 10px;">
    <div class="sched_body" data-actPeta>
    </div>
</div>
`
    static setActivity(name)
    {
        return `<div class="act_row">${name}</div>`
    }
}