import Head from "next/head"
import Layout from "../components/layout"
import styles from "../styles/Home.module.scss"

export default function Home() {
  const quickOverview = [
    {
      title: 'Summary',
      overview: 'Watch this for a summary of some of the most important points.',
      link: 'https://www.youtube.com/watch?v=SsLRTULonuI'
    },
    {
      title: 'FUD FAQ',
      overview: 'See the top and most common repeat questions of the week.',
      link: '/fud-faq'
    },
    {
      title: 'Core Team',
      overview: 'Meet some of the protocol core contributors.',
      link: 'https://www.digitalax.xyz/team'
    }
  ]
  const coreAreas = [
    {
      title: 'Indie Web3 Fashion Marketplace',
      overview: 'Where you can buy digital fashion NFTs on Polygon Network.',
      link: 'https://fashion.digitalax.xyz/'
    },
    {
      title: 'Designer Realms',
      overview: 'Indie Web3 Fashion Fleet of Brands and Labels.',
      link: 'https://digitalax.gitbook.io/digitalax/decentralised-and-forkable-protocol-stack/designer-realms'
    },
    {
      title: 'Web3 Patrons',
      overview: 'Champion Your Favourite Indie Web3 Fashion Brands.',
      link: 'https://patrons.digitalax.xyz/'
    },
    {
      title: 'Collector DAOs',
      overview: 'Join A Dedicated Web3 Fashion Buy Side DAO.',
      link: 'https://patrons.digitalax.xyz/'
    },
    {
      title: 'Web3 Models',
      overview: 'Digital and Physical Models.',
      link: 'https://models.digitalax.xyz/'
    },
    {
      title: 'ESPA Casual Esports Platform',
      overview: 'Take your fashion in-game and earn $MONA as you play. ',
      link: 'https://www.digitalax.xyz/espa'
    },
    {
      title: 'Fractional Garment Ownership',
      overview: 'A unique way to open source the entire fashion industry with the blockchain.',
      link: 'https://designers.digitalax.xyz/fractional/'
    },
    {
      title: 'DRIP NFT Marketplace',
      overview: 'Where you can buy physical web3 fashion NFTs. ',
      link: 'https://drip.digitalax.xyz/'
    },
    {
      title: 'Staking for $MONA Yield',
      overview: 'Where you can stake your fashion NFTs to earn $MONA rewards.',
      link: 'https://staking.digitalax.xyz/'
    },
    {
      title: 'DIGIFIZZY',
      overview: 'An immersive digital NFT magazine covering the entire web3 space every month.',
      link: 'https://digifizzy.xyz/'
    },
    {
      title: 'PODE',
      overview: 'Access NFT for the indie gaming scene.',
      link: 'https://www.digitalax.xyz/pode'
    },
    {
      title: 'DASH File Format',
      overview: 'A new 3D file format architecture for metaverse interoperability. ',
      link: 'https://www.digitalax.xyz/file-format-spec'
    },
    {
      title: 'LOOK Project',
      overview: 'Learn about LOOK, the Loot Project metaverse fashion derivative.',
      link: 'https://www.digitalax.xyz/look'
    }
  ]
  const fashionDesigner = [
    {
      title: 'Discover the GDN',
      overview: 'See who is part of the Global Designer Network. ',
      link: 'https://designers.digitalax.xyz/global/'
    },
    {
      title: 'Launch A Web3 Fashion Realm',
      overview: 'Launch your own web3 fashion market and realm.',
      link: 'https://digitalax.gitbook.io/digitalax/decentralised-and-forkable-protocol-stack/designer-realms/realms-101'
    },
    {
      title: 'GDN DAO Structure',
      overview: 'Learn about the $GDN DAO token economics. ',
      link: 'https://digitalax.gitbook.io/digitalax/decentralised-and-forkable-protocol-stack/global-designer-network-dao#global-designer-network-dao.'
    },
    {
      title: 'Join the GDN',
      overview: 'Join the Global Designer Network and the web3 fashion industry. ',
      link: 'https://discord.gg/rzFbc9ZmAg'
    },
    {
      title: 'Buy GDN Web3 Fashion',
      overview: 'Buy and collect digital and physical fashion NFTs designed by the GDN.',
      link: 'https://fashion.digitalax.xyz/'
    },
    {
      title: 'Stay Up to Date',
      overview: 'Stay connected with the GDN.',
      link: 'https://twitter.com/web3fashion'
    }
  ]
  const model = [
    {
      title: 'Discover the GMS',
      overview: 'See who is part of the Global Models Syndicate. ',
      link: 'https://models.digitalax.xyz/global/'
    },
    {
      title: 'Join the GMS',
      overview: 'Join as a web3 metaverse digi or IRL model.',
      link: 'https://discord.gg/Ht9as7wCUk'
    },
    {
      title: 'Buy GMS Runway Looks',
      overview: 'Buy and collect breakout model looks.',
      link: 'https://runway.digitalax.xyz/'
    },
    {
      title: 'Open Avatar Elementals',
      overview: 'See open source model avatars.',
      link: 'https://models.digitalax.xyz/avatarlibraries/'
    },
    {
      title: 'Realm Runways',
      overview: 'Attend an indie metaverse runway experience.',
      link: 'https://realmrunway.xyz/'
    },
    {
      title: 'Stay Up to Date',
      overview: 'Stay connected with the GMS.',
      link: 'https://twitter.com/web3models'
    }
  ]
  const tokenEcosystem = [
    {
      title: 'What is $MONA?',
      overview: 'Learn about the $MONA token Governance, Utility and its fair distribution. The team took 0% allocation.',
      link: 'https://digitalax.gitbook.io/digitalax/token-economy/token-distribution'
    },
    {
      title: 'What are Genesis MONA NFTs?',
      overview: 'Learn about the Genesis MONA NFTs and Genesis Period. ',
      link: 'https://digitalax.gitbook.io/digitalax/token-economy/the-genesis-period'
    },
    {
      title: 'Transparency Reports',
      overview: 'Every month we release our protocol expenditure to stay transparent with the community.',
      link: '/transparency-reports'
    }
  ]
  const reasons = [
    {
      title: 'Web3 Fashion Week',
      overview: 'We hosted the first W3FW and there is more to come.',
      link: 'https://www.web3fashionweek.xyz/'
    },
    {
      title: 'Wear 2 DeFi',
      overview: 'We introduced yield farming for fashion. ',
      link: 'https://blog.digitalax.xyz/fashion-x-defi-signals-the-end-of-crashing-markets-empty-pockets-b3ccedf91099'
    },
    {
      title: 'Heartfelt Reminders',
      overview: 'Read about good work being done by our community, changing the lives of young designers.',
      link: 'https://blog.digitalax.xyz/a-heartfelt-reminder-of-why-we-are-all-here-da56aa5003f6'
    },
    {
      title: 'Novel Engineering',
      overview: 'First Multi-token ERC-998 bridge between Polygon and Ethereum.',
      link: 'https://www.digitalax.xyz/engineering'
    },
    {
      title: 'Polygon Ecosystem Award',
      overview: 'We joined the Polygon family early and they recognised us for it.',
      link: 'https://blog.digitalax.xyz/polygon-awards-digitalax-with-a-20k-web3-fashion-seed-grant-2ee7c1540c3c'
    },
    {
      title: 'Sustainability in NFTs, Fashion',
      overview: 'Read our thoughts on sustainability in fashion and NFTs.',
      link: 'https://blog.digitalax.xyz/sustainability-and-nfts-the-truth-about-fashion-80acc96b12a6'
    },
    {
      title: 'Full Embrace of CC0',
      overview: 'Undercutting the Copyright Cartels.',
      link: 'https://blog.digitalax.xyz/clarity-on-cc0-as-digitalax-scales-up-self-sovereign-infrastructure-3a30d4412362'
    }
  ]
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <Head>
            <title>Primer Digitalax</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.topBanner}>
            <div className={styles.text}>
              The DIGITALAX ecosystem moves very fast to keep up with and set
              the pace of change in web3 fashion, the metaverse, NFTs and
              beyond.{" "}
            </div>
            <div className={styles.subText}>
              {" "}
              We have a plethora of resources across our blog <a href="https://blog.digitalax.xyz/" _target="blank">here</a> (Which gets
              updated almost daily), our twitter account <a href="https://twitter.com/DIGITALAX_" _target="blank">here</a> and the best place
              to ask questions and get almost instant answers is our discord
              community <a href="https://discord.gg/DKbSqRGtKv" _target="blank">here</a>.{" "}
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Quick Overview of DIGITALAX Ecosystem
            </h2>
            <div className={styles.sectionItems}>
              {quickOverview.map((item) => (
                <div className={styles.item} key={item.title}>
                  <div className={styles.itemTitle}> {item.title} </div>
                  <div className={styles.itemOverview}> {item.overview} </div>
                  <div className={styles.itemLinkWrapper}>
                    <a href={item.link} target="_blank" rel="noreferrer" className={styles.itemLink}>
                      <img src="/images/arrow.png" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Core Areas of the DIGITALAX Ecosystem
            </h2>
            <div className={styles.sectionItems}>
              {coreAreas.map((item) => (
                <div className={styles.item} key={item.title}>
                  <div className={styles.itemTitle}> {item.title} </div>
                  <div className={styles.itemOverview}> {item.overview} </div>
                  <div className={styles.itemLinkWrapper}>
                    <a href={item.link} target="_blank" rel="noreferrer" className={styles.itemLink}>
                      <img src="/images/arrow.png" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              How to Become A Web3 Fashion Designer
            </h2>
            <div className={styles.sectionItems}>
              {fashionDesigner.map((item) => (
                <div className={styles.item} key={item.title}>
                  <div className={styles.itemTitle}> {item.title} </div>
                  <div className={styles.itemOverview}> {item.overview} </div>
                  <div className={styles.itemLinkWrapper}>
                    <a href={item.link} target="_blank" rel="noreferrer" className={styles.itemLink}>
                      <img src="/images/arrow.png" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              How to Become A Web3 Model
            </h2>
            <div className={styles.sectionItems}>
              {model.map((item) => (
                <div className={styles.item} key={item.title}>
                  <div className={styles.itemTitle}> {item.title} </div>
                  <div className={styles.itemOverview}> {item.overview} </div>
                  <div className={styles.itemLinkWrapper}>
                    <a href={item.link} target="_blank" rel="noreferrer" className={styles.itemLink}>
                      <img src="/images/arrow.png" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Token Ecosystem
            </h2>
            <div className={styles.sectionItems}>
              {tokenEcosystem.map((item) => (
                <div className={styles.item} key={item.title}>
                  <div className={styles.itemTitle}> {item.title} </div>
                  <div className={styles.itemOverview}> {item.overview} </div>
                  <div className={styles.itemLinkWrapper}>
                    <a href={item.link} target="_blank" rel="noreferrer" className={styles.itemLink}>
                      <img src="/images/arrow.png" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Reasons to Simp
            </h2>
            <div className={styles.sectionItems}>
              {reasons.map((item) => (
                <div className={styles.item} key={item.title}>
                  <div className={styles.itemTitle}> {item.title} </div>
                  <div className={styles.itemOverview}> {item.overview} </div>
                  <div className={styles.itemLinkWrapper}>
                    <a href={item.link} target="_blank" rel="noreferrer" className={styles.itemLink}>
                      <img src="/images/arrow.png" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
