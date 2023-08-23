export default function AddItem( {setItemName} ) {
    //props: setItemName, setCoundown
    //contains input field for item name whose value is passsed into setItemName
    //contains timer wheel whose value is assigned to setCountdown

    const handleInputChange = (event) => {
        setItemName(event.target.value);
    }
    return (
        <div>
            <input
                type="text"
                onChange={handleInputChange}
            />
        </div>
    )
}
