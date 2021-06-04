import { createContext, ReactNode, useState } from "react";


interface ChallangesContextData{
    level:number;
    currentExperience: number;
    challengesCompleted:number;
    levelUp: () => void;
    startNewChallenge: () => void;
}


interface ChallangesProviderProps{
    children: ReactNode;
}
export const ChallengesContext = createContext({}  as ChallangesContextData);

export function ChallangesProvider({ children }: ChallangesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);


    function levelUp(){
        setLevel(level + 1 );
    }

    function startNewChallenge(){
        console.log("teste");
    }

    return(
        <ChallengesContext.Provider value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}