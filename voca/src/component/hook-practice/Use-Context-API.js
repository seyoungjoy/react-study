import {createContext} from "react";

const AppContext = createContext();

export default function userContext(){
    const user = {
        nickname:'danuel',
        isAdmin:true
    }

    return(
        <div>
            <h2>UserContext</h2>
        </div>
    )
}

