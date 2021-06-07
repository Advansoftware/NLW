import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallangesContexts";
import styles from "../style/components/Profile.module.css";
export function Profile(){
    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/advansoftware.png" alt="Bruno" />
            <div>
                <strong>Bruno Antunes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}