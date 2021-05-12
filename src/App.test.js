import { render, screen, cleanup } from '@testing-library/react'
import SubmitButton from "./components/submitButton/SubmitButton";
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/counter/Counter";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router} from 'react-router-dom';



afterEach(()=> {
  cleanup()
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
//
// it('renders Region without crashing', () => {
//     const div = document.createElement('div');
//     act( ()=> {
//
//        ReactDOM.render(
//            <Router>
//                <AuthContextProvider>
//                    <Region />
//                </AuthContextProvider>
//
//            </Router>
//            , div);
//    })
//
// });


test('should have text jodelajo',()=>{
    render(
        <Router>
            <Footer/>
        </Router>
    )
    const FooterElement = screen.getByTestId('footer-1')
    expect(FooterElement).toHaveTextContent('jodelajo')
})

