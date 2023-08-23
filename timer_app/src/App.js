//import './App.css'
import React, { useState } from 'react';
import Item from './components/Item';
import AddItem from './components/AddItem';

function App() {
    //state: itemName, countdown
    //passes down itemName and countdown to Item component
    //passes down setItemName and setCountdown to AddItem component
    //renders Item and AddItem
    let [itemName, setItemName] = useState('');
    return (
        <div>
            <AddItem setItemName={setItemName} />
            <Item itemName={itemName} />
        </div>
    );
}

export default App;