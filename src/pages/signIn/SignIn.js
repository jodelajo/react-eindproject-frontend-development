import React from 'react';
import InputField from "../../components/inputField/InputField";


function SignIn (){
    return <main>
        <form>
            <InputField/>
            <InputField/>

            <button type="submit">Sign In</button>
        </form>
    </main>
}
export default SignIn