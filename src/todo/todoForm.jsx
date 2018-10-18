import React from 'react'
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input id="description" className="form-control" type="text" placeholder="Adicione uma tarefa" 
            onChange={props.handleChange}
            value={props.description}
            />
        </Grid>
        <Grid cols="12 3 2">
            <IconButton estilo="primary" icon="plus" 
            onClick={props.handleAdd}/>
            <IconButton estilo="info" icon="search"
            onClick={props.handleSearch} />
        </Grid>
    </div>
)