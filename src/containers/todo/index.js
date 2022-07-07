import {useState} from 'react'
import CheckboxItem from '../../components/checkbox-item'

function Todo() {
    const [tasks, setTasks] = useState([
        {
            name: 'Do homework',
            done: false
        },
        {
            name: 'Clean house',
            done: false
        },
        {
            name: 'Cook meal',
            done: false
        }
    ])

    const handleChange = (e, item, index) => {
        const temp = [...tasks]
        temp[index].done = !temp[index].done
        setTasks([...temp])
    }

    const taskItems = tasks.map((item, i) => <CheckboxItem key={i} item={item.name} done={item.done} index={i} handleChange={handleChange}/>)

    return(
        <>
            {taskItems}
        </>
    )
}

export default Todo