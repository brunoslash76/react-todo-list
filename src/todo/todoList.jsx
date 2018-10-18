import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows= () => {

        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton estilo="success" icon="check"
                    hide={todo.done}
                    onClick={() => props.handleMarkAsDone(todo)}/>
                    <IconButton estilo="warning" icon="undo"
                    hide={!todo.done}
                    onClick={() => props.handleMarkAsPending(todo)}/>
                    <IconButton estilo="danger" icon="trash-o"
                    hide={!todo.done}
                    onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}