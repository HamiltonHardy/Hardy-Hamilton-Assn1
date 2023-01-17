import { FormInput } from "../components/FormInput"

export function SignUpPage(){
    return(
        <main>
            <h2>
                SignUp
            </h2>
            <form>
                <FormInput label="Name"/>
                <FormInput label = "Email"/>
                <FormInput label="Email Confirmation"/>
                <FormInput type = "password" label = "passowrd"/>
                <FormInput type = "password" label="password Confirmation"/>
                <div className = "controls">
                    <button>
                        Sign Up
                    </button>
                </div>
            </form>
        </main>
    )
}