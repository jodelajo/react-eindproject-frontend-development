import { render, screen, cleanup } from '@testing-library/react';
import SubmitButton from "../components/submitButton/SubmitButton";
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "../components/counter/Counter";
import Footer from "../components/footer/Footer";
import {BrowserRouter as Router} from 'react-router-dom';
import {validateEmail} from "../pages/signUp/SignUp";


afterEach(()=> {
  cleanup()
})

test("validateEmail should return true when the email is valid", function (){
    const validEmail = "pi@po.nl"
    const resultEmail = validateEmail(validEmail);
    expect(resultEmail).toBe(true);
})

test("validateEmail should return a feedback message when the email is not valid", function (){
    const validEmail = "pipo"
    const resultEmail = validateEmail(validEmail);
    expect(resultEmail).toBe('Uw email dient een "@" te bevatten.');
})

test('should render SubmitButton component', () =>{
  render(<SubmitButton />)
  const SubmitButtonElement = screen.getByTestId('button-1')
  expect(SubmitButtonElement).toBeInTheDocument()
})

it('renders Counter without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Counter />, div);
});

test('should have text jodelajo',()=>{
    render(
        <Router>
            <Footer/>
        </Router>
    )
    const FooterElement = screen.getByTestId('footer-1')
    expect(FooterElement).toHaveTextContent('jodelajo')
})

