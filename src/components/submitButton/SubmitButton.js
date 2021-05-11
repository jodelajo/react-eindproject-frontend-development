import React from 'react'
import './SubmitButton.css'

function SubmitButton({disabled, buttonText, onClick}){
    return <button type="submit"
                   className="submit-button"
                   disabled={disabled}
                    onClick={onClick}
                   data-testid='button-1'
    >{buttonText}</button>
}
export default SubmitButton