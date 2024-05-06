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