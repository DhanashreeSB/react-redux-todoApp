import React from 'react'
import Enzyme,{ mount,shallow } from 'enzyme';
import AddTodo from './AddTodo';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


test('test onClick event',() => {
    const test1 = shallow(<AddTodo/>);
    console.log(test1);
    const btn = test1.find("#add").props();
    console.log(btn);
})