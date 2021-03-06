import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallangesContexts";
import styles from "../style/components/CompletedChallenges.module.css";

export function CompletedChallenges(){
    const  { challengesCompleted } = useContext(ChallengesContext); 

    return(
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}