import styles from "../style/components/ChallengeBox.module.css";
import { ChallengesContext } from "../contexts/ChallangesContexts";
import { useContext } from "react";

export function ChallengeBox(){

    const hasActiveChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    
                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.changellengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.changellengeSucceededButton}
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