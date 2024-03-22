import { FunctionComponent } from "preact";
import {AgendaResponse,Agenda} from "../types.ts"

type AgendaProps={
    docs:Agenda[]
}
const agendas: FunctionComponent<AgendaProps>=(props)=>{
    const agenda=props.docs;

    return(
        <div class="contactos">
            <h1>Contactos</h1>
            {agenda.map(e=>{
                return(
                    <div key={e.name}>
                        <span>{e.name}</span>
                        <span>{e.email}</span>
                        
                    </div>
                )
            })}
        </div>
    )
}
export default agendas;