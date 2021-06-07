import { CompletedChallenges } from "./components/CompletedChallenges";
import { CountDown } from "./components/CountDown";
import ExperienceBar from "./components/ExperienceBar";
import { Profile } from "./components/profile";
import styles from "./style/pages/Home.module.css";
import Head from "next/head";
import { ChallengeBox } from "./components/ChallengeBox";
import { CountdownProvider } from "./contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallangesProvider } from "./contexts/ChallangesContexts";

interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (
    <ChallangesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}  
    >
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div>
        <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>

    </div>
    </ChallangesProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  }

  const { level, challengesCompleted, currentExperience } = ctx.req.cookies;

  return{
    props: {    
      level: Number(level), 
      challengesCompleted: Number(challengesCompleted), 
      currentExperience: Number(currentExperience) 
    }
  }
}