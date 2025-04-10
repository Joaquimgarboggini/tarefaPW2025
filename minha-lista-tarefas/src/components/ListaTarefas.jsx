import { useState } from 'react';

import './ListaTarefas.css'

function ListaTarefas(){
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== ''){
            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefa("");
        }
    };

    const removerTarefa = (indice) => {
        setTarefas(tarefas.filter((_, i) => i !== indice));
    };

    return(
        <div>
            <h2 id="lista">Lista de tarefas</h2>
            <input
                type='text'
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder='adicione sua tarefa'
            />
            <button onClick={adicionarTarefa}>adicionar</button>
            <ul>
                {tarefas.map((tarefa, indice)=>(
                    <li key={indice}>
                        {tarefa} <button onClick={() =>
                            removerTarefa(indice)}>
                                Remover
                            </button>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaTarefas;