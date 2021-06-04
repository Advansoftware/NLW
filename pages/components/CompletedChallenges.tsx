import styles from "../style/components/CompletedChallenges.module.css";

export function CompletedChallenges(){
    return(
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}