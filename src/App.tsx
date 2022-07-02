import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button/Button";

type StateType = {
    id: number
    task: string
    isActive: string
}
export type FilterStateType = 'all' | 'true' | 'false'


function App() {

    let [state, setState] = useState([
        {id: 1, task: 'JS', isActive: 'true'},
        {id: 2, task: 'HTML', isActive: 'true'},
        {id: 3, task: 'React', isActive: 'false'},
        {id: 4, task: 'TypeScript', isActive: 'false'},
        {id: 5, task: 'CSS', isActive: 'true'},
        {id: 6, task: 'Redux', isActive: 'false'}
    ])

    let [filter, setFilter] = useState<FilterStateType>('all')
    const changeStateActive = (name: FilterStateType ) => {
        setFilter(name)
    }

    const ChangeActiveTasks = (state:StateType[],filter:FilterStateType) => {
        if (filter === 'all'){
            return state
        }else return state = state.filter(el => el.isActive === filter)
        return state
    }
    let NewPageActive = ChangeActiveTasks(state,filter)

    let stateForPage = NewPageActive.map(el => {
        return <div key={el.id}><Button name={'X'}  callback={() => deleteTasks(el.id)}/><span>{el.task}:____</span><span>{el.isActive}</span></div>
    })

    let deleteTasks = (id:number)=> {
        state = state.filter(el => el.id !== id)
        setState(state)
    }

    return (
        <div className="App">
            {stateForPage}
            <Button name={'all'} callback={() => changeStateActive('all')}/>
            <Button name={'true'} callback={() => changeStateActive('true')}/>
            <Button name={'false'} callback={() => changeStateActive('false')}/>

        </div>
    );
}

export default App;
