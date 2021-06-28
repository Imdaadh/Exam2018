import React from 'react';
import { shallow } from 'enzyme';
import ReactDom from 'react-dom'
import App from './component/AddCourse/createCourse'
import {describe, it} from "@jest/globals";


describe('ADD COURSE FORM', () => {
  it('render without crashing', () => {
    const div =document.createElement("div")
    ReactDom.render(<App/>,div)

  });


});