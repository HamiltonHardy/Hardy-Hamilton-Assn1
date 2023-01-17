import{ ReactNode} from 'react'

interface FormInputProps{
    type?: string
    // ? means that label COULD be undefined
    // type: string | number; specifies the different types it could be
    label: string;
}


function test(mine: number, max: number){

}
// Reason we use a dictionary here is bc there can only be ONE parameter so need to spcify a dict that has several different types in an interface
export function FormInput({type = "text", label}: FormInputProps){
    return (
        <div className="flex-input">
            <label>
                {label}
                <input type={type}/>
            </label>
        </div>
    )
}