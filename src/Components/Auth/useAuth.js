import { useState, useEffect } from "react";
import { auth } from "../../Firebase";

function Auth(){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const unSub = auth.onAuthStateChanged(user => {
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })

        return unSub
    })

    return user

}

export default Auth