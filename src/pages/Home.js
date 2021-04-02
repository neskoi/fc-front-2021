import React from 'react';
import { useHistory } from 'react-router';

import '../styles/pages/Home.css';

function Home() {
    const history = useHistory()

    return (
        <div>
            <h1 style={{ color: '#FF692A' }}>Equipa os Guri</h1>
            <h2>Pessoas em Ação</h2>
            <h3>Por que Doar</h3>
            <button>Doar</button>
            <h3>Como doar</h3>
            <button onClick={()=> history.push('/students')}>Ver os guris</button>
            <h3>Como receber doação</h3>
            <button onClick={()=> history.push('/responsible')}>Receber doação</button>
        </div>
    );
}

export default Home;