import { FunctionComponent } from "preact";

type MenuProps={
    selected:"AgendaClient"|"AgendaServer"
}

const Menu: FunctionComponent<MenuProps>=({selected})=>{
    return(
        <div class="menu">
            <a href="/AgendaClient" class={selected==="AgendaClient"?"selected":""}>Agenda Client Side</a>
            <a href="/AgendaServer" class={selected==="AgendaServer"?"selected":""}>Agenda Server Side</a>
        </div>
    )
}

export default Menu