//Countdown timer logic rendered inside Item component

//PLAN: save time as state variable to be changed in the add-item component

export default function Countdown({ timeValue }){

    //COUNTDOWN LOGIC HERE

    return (
        <div>
            <h2>{timeValue}</h2>
        </div>
    )
};

//add logic to count down from a set value
//render live countdown in return statement
//add logic to update the countdown start value according to the this.state.