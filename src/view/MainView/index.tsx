import React, {useState} from 'react';
import './styles.css';
import CounterComponent from "../../components/CounterComponent";
import TimerComponent from '../../components/TimerComponent';

function MainView() {
    const [amount, setAmount] = useState(0);
    const [timer, setTimer] = useState(0);

    function handleClickCalculate() {
        setTimer (amount*8);
    }
    function handleClickReturn() {
        setTimer(0);
        setAmount(0);
    }
    return (
        <>   
            <h1>RESIN COUNTER</h1>      
            <div id="main">
                {
                   timer === 0 ? 
                        (<CounterComponent
                            onClick = {handleClickCalculate}
                            amount = {amount}
                            onChange = {setAmount}
                        />)
                    :   
                        (<TimerComponent 
                            timer = {timer}
                            onClick = {handleClickReturn}
                        />)
                }
            
            </div>
        </>

    )
}

export default MainView;