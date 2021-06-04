import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallangesContexts";
import styles from "../style/components/CountDown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function CountDown(){

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, sethasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const secunds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secundsLeft, secundsRight] = String(secunds).padStart(2, '0').split('');

    function startCountdown(){
        setIsActive(true);
    }
    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }
    useEffect(()=>{
        if(isActive && time>0){
            countdownTimeout = setTimeout(()=>{
                setTime(time - 1);
            }, 1000)
        }else if(isActive && time === 0){
            sethasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);
    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secundsLeft}</span>
                    <span>{secundsRight}</span>
                </div>
            </div>
            {
                hasFinished ? (
                    <button
                        disabled
                        className={styles.countdownButton}
                        >
                        Ciclo Encerrado 
                    </button>
                ) : (
                    <>
                        { isActive ? (
                        <button
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                            >
                            Abandonar ciclo  
                        </button>
                        ) : (
                        <button
                            type="button" 
                            className={styles.countdownButton}
                            onClick={startCountdown}
                            >
                            Iniciar um Ciclo
                        </button>
                    )}
           
                    </>
                )
            }
            
           
            
        </div>
    );
}