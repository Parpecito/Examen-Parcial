import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import {AgendaResponse} from "../types.ts"
import agendas from "../components/agendas.tsx";

const AgendaClient: FunctionComponent=()=>{
    const [name,setName]=useState<string>("");
    const [email,SetEmail]= useState<string>("");
    const [agenda,setAgenda] =useState<AgendaResponse>([])

    const onSearch= async()=>{
        const response =await fetch("api/agendas")
        const datam: AgendaResponse=await response.json();

        setAgenda[datam]

    }

    return(
        <div class="formulario">
            <form>
                    <h1>Add new contact</h1>
                    <input  name="name" placeholder="Name" value={name}onInput={()=>setName(name)}></input>
                    <br/>
                    <input name="email" placeholder="Email" value={email} onInput={()=>SetEmail(email)}></input>

                    <button onClick={()=>onSearch}>Add Contact</button>
            </form>
            
        </div>
    )
}

export default AgendaClient;