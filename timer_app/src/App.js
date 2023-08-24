import './App.css'
import React, { useState } from 'react';
import Item from './components/Item';
import AddItem from './components/AddItem';

export default function App() {
    //state: itemName, countdown
    //passes down itemName and countdown to Item component
    //passes down setItemName and setCountdown to AddItem component
    //renders Item and countdown
    let [itemName, setItemName] = useState('');
    return (
        <div>
            <AddItem setItemName={setItemName} />
            <Item itemName={itemName} />
        </div>
    );
}


//next steps: set up react router so when add button is clicked user navigates to add-item page
//add 'Add' button that navigates back to home and renders Item component as a list
