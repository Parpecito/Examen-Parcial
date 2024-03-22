import {FreshContext} from "$fresh/server.ts"
import Menu from "../components/Menu.tsx"

const Layout= async( req: Request, ctx: FreshContext)=>{
    const Component=ctx.Component;
    const route=ctx.route;
    const page=route.split("/").pop();
    const selected=page===""?"AgendaClient":"AgendaServer";

    return(
        <div >
            <Menu selected={selected}></Menu>
            <h1 class="general">My Agenda</h1>
            <Component/>
        </div>

        
    )
}

export default Layout;