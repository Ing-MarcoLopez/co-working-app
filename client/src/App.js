import React, { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards'

const App = () => {

    const [data, setData] = useState([]);
    useEffect(() => {

    }, [])

    return (
        <div>
            <Cards></Cards>
        </div>
    )
}

export default App;
