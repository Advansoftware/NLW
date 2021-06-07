import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallangesContexts';
import styles from '../style/components/ExperienceBar.module.css';
export default function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    const porcentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    console.log(porcentToNextLevel);
    return(
            
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width:`${porcentToNextLevel}%` }}/>
                <span className={styles.currentExperience} style={{left:`${porcentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
        
    );
}