import { findIndexArr } from '../src/utils';
import { eventInstances } from '../src/eventInstances';
import clickOutside from '../src/clickOutside';

const arr = [
    {
        id: 'test',
    },
    {
        id: 'test1'
    },
    {
        id: 'test2'
    }
]

const arr2 = [
    {
        id: 'test',
        name: 'test'
    },
    {
        id: 'test1',
        name: 'test1'
    },
    {
        id: 'test2',
        name: 'test2'
    }
]

test('findIndex', ()=>{
    expect(findIndexArr(arr, {id: 'test'})).toBe(0)
}) 

test('findIndex 2 conditions', ()=>{
    expect(findIndexArr(arr2, { name: 'test1', id: 'test1'})).toBe(1)
})

test('findIndex not in array', ()=>{
    expect(findIndexArr(arr2, {id: 'test', name: 'test1'})).toBe(-1)
})

const el = document.createElement('div');

test('bind element', ()=>{
    const binding = {
        value(e) {
            return e
        }
    }
    function bindThenUnbind() {
        clickOutside.bind(el, binding);
        return eventInstances.length
    }
    expect(bindThenUnbind()).toBe(1)
})

test('unbind element', ()=>{
    function bindThenUnbind() {
        clickOutside.unbind(el);
        return eventInstances.length
    }
    expect(bindThenUnbind()).toBe(0)
})