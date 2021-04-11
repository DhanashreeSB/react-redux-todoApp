import React from 'react'
import Enzyme,{ mount,shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Schedule from './Schedule';

configure({ adapter: new Adapter() });


test('test onClick event of remove',() => {
    const test1 = shallow(<Schedule/>);
    console.log(test1);
    const instance1 = test1.instance();
    console.log(instance1);
    //call deleteTodo method from this test
    instance1.deleteTodo();
})