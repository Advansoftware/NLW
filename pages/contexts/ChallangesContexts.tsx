import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "../challenge.json";
import Cookies from "js-cookie";
import { LevelUpModal } from "../components/LevelUpModal";

interface Challenge {
    type: 'body' |'eye';
    description: string;
    amount: number;
}

interface ChallangesContextData{
    level:number;
    currentExperience: number;
    challengesCompleted:number;
    experienceToNextLevel: number;
    activeChallenges: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    CompleteChallenges: () => void;
    closeLevelUpModal: () => void;
}

interface ChallangesProviderProps{
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}
export const ChallengesContext = createContext({}  as ChallangesContextData);

export function ChallangesProvider({ children,
    ...rest
}: ChallangesProviderProps){
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ??0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0 );
    
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpeModalOpen, setLevelUpModalOpen] = useState(false);

    
    const experienceToNextLevel = Math.pow((level + 1) * 4,2)
    
    useEffect(()=>{
        Notification.requestPermission();
    }, []);
    useEffect(()=>{
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));

    }, [level, currentExperience, challengesCompleted]);

    function levelUp(){
        setLevel(level + 1 );
        setLevelUpModalOpen(true)
    }
    function closeLevelUpModal(){
        setLevelUpModalOpen(false)
    }

    function startNewChallenge(){
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengesIndex];
        
        new Audio('/notification.mp3').play();

        setActiveChallenge(challenge);
        if(Notification.permission === 'granted'){
            new Notification('Novo Desafio', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function CompleteChallenges(){
        if(!activeChallenge){
            return;
        }   
        const {amount} = activeChallenge;
        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel)
        {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }
    return(
        <ChallengesContext.Provider
        value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                CompleteChallenges,
                closeLevelUpModal,
            }}
        >
            {children}
            { isLevelUpeModalOpen && <LevelUpModal/>}
        </ChallengesContext.Provider>
    );
}