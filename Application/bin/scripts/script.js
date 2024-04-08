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