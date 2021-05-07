import React from 'react'
import './SubmitButton.css'

function SubmitButton({disabled, buttonText, onClick}){
    return <button type="submit"
                   className="submit-button"
                   disabled={disabled}
                    onClick={onClick}
    >{buttonText}</button>
}
export default SubmitButton