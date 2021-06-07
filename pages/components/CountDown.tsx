import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallangesContexts";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../style/components/CountDown.module.css";



export function CountDown(){
    const { 
        minutes,
        secunds,
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secundsLeft, secundsRight] = String(secunds).padStart(2, '0').split('');

   
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