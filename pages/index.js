import Head from "next/head"
import Layout from "../components/layout"
import styles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <> 
 <Layout>
    <div className={styles.container}>
          <Head>
            <title>Slugs' Saloon</title>
            <meta name="Slugs' Saloon" content="Slugs is a remanifestation of the original spirit of Slugs’ Saloon, one of the most formative Jazz cultural destinations throughout the 60s & 70s." />
            <link rel="icon" href="/faviconnn.ico" />
          </Head>
          <main className={styles.main}>
            <div className={styles.text}>
              "It's All Music"
              <h2>- Lee Morgan</h2>
            </div>
            <div className={styles.subText}>
            Slugs is a remanifestation of the original spirit of Slugs’ Saloon, one of the most formative Jazz cultural destinations throughout the 60s & 70s. 
<br></br><br></br>
It brings jazz artists and improvisational musicians into a new medium where the essential elements of syncopated rhythm, blues, swing and creative freedom are coated right into the roots and instruments that gives players in web3 room to explore.
<br></br><br></br>
Slugs mixes vibrant IRL and immersive musical events with new ways to experience and create sound, through the freedom given to creators to forge more independent and dynamic avenues to compensation and attention through NFTs. 
            </div>
  
          <div className={styles.section}>
            <img className={styles.mainImg} src='\images\mainimage.png' ></img>
        </div>
        </main>
        </div>
      </Layout>
    </>
  );
}
