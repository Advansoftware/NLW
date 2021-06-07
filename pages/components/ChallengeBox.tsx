import { useState, useEffect, useContext } from "react";
import styles from "../style/components/ChallengeBox.module.css";
import { ChallengesContext } from "../contexts/ChallangesContexts";
import { CountdownContext } from "../contexts/CountdownContext";
export function ChallengeBox(){
    const { activeChallenge, resetChallenge, CompleteChallenges } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        CompleteChallenges();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.changellengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.changellengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>

            ) : (
            <div className={styles.challengeBoxNotActive}>
                <strong>
                    Finalize um ciclo para receber um desafio
                </strong>
                <p>

                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level Completando desafios.
                </p>
            </div>
            )}
        </div>
    )
}