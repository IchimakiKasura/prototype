export class info 
{
    #gt(val)
    {
        return document.querySelector(`#${val}`).children[0];
    }

    type(value)
    {
        this.#gt("TYPE_TEXT").innerText = value
    }

    name(value)
    {
        this.#gt("NAME_TEXT").innerText = value
    }

    year(value)
    {
        this.#gt("YEAR_TEXT").innerText = value
    }

    section(value)
    {
        this.#gt("SECTION_TEXT").innerText = value
    }

    id(value)
    {
        this.#gt("ID_TEXT").innerText = value
    }

    balance(value)
    {
        this.#gt("BAL_TEXT").innerText = value
    }
}