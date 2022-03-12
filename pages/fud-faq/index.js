import React from "react"; 
import Head from "next/head"
import Layout from "../../components/layout";
import styles from "./styles.module.scss";

const FudFaq = () => {
  const scopes = [
    {
      title: 'Week Zero',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-0-a00b706268d7'
    },
    {
      title: 'Week One',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-1-2ec37ad3d5d0'
    },
    {
      title: 'Week Two',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-2-44d63c725216'
    },
    {
      title: 'Week Three',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-3-299beddbcd'
    },
    {
      title: 'Week Four',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-4-f33ffa81d05c'
    },
    {
      title: 'Week Five',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-5-2928178536a0'
    },
    {
      title: 'Week Six',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-6-db9deb6b04f6'
    },
    {
      title: 'Week Seven',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-7-5b236132cd88'
    },
    {
      title: 'Week Eight',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-8-2f1d6759e89'
    },
    {
      title: 'Week Nine',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-9-76efb12c1c37'
    },
    {
      title: 'Week Ten',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-10-ccf8d7fb820e'
    },
    {
      title: 'Week Eleven',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-11-c1e8625f9742'
    },
    {
      title: 'Week Twelve',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-12-9719b19e8380'
    },
    {
      title: 'Week Thirteen',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-13-12f55f36bc0a'
    },
    {
      title: 'Week Fourteen',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-14-c20ecfd396db'
    },
    {
      title: 'Week Fifteen',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-15-f05e2430d284'
    },
    {
      title: 'Week Sixteen',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-16-8d3f6e499b90'
    },
    {
      title: 'Week Seventeen',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-17-356fd5c1004f'
    },
    {
      title: 'Week Eighteen',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-18-b28d1f249d74'
    },
    {
      title: 'Week Nineteen',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-19-5a4c33eae418'
    },
    {
      title: 'Week Twenty',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-20-9ac50326855a'
    },
    {
      title: 'Week Twenty One',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-21-8d5cccbb7624'
    },
    {
      title: 'Week Twenty Two',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-22-1274753a8338'
    },
    {
      title: 'Week Twenty Three',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-23-59bd80c074f0'
    },
    {
      title: 'Week Twenty Four',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-24-5e3ed14405da'
    },
    {
      title: 'Week Twenty Five',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-25-8b7a9cb9b1fd'
    },
    {
      title: 'Week Twenty Six',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-26-9d2b4272cb51'
    },
    {
      title: 'Week Twenty Seven',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-27-632b0c1c78a4'
    },
    {
      title: 'Week Twenty Eight',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-28-cfbb54292dae'
    },
    {
      title: 'Week Twenty Nine',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-29-5806dac188c7'
    },
    {
      title: 'Week Thirty',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-30-1190092e9f17'
    },
    {
      title: 'Week Thirty One',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-31-8301264fee41'
    },
    {
      title: 'Week Thirty Two',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-32-59b1f6e39e30'
    },
    {
      title: 'Week Thirty Three',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-33-649a03b927bc'
    },
    {
      title: 'Week Thirty Four',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-34-3019381167c6'
    },
    {
      title: 'Week Thirty Five',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-35-a36e06709bfa'
    },
    {
      title: 'Week Thirty Six',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-36-cdbd8cfd1627'
    },
    {
      title: 'Week Thirty Seven',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-37-d8888538b763'
    },
    {
      title: 'Week Thirty Eight',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-38-f7aa74419818'
    },
    {
      title: 'Week Thirty Nine',
      link: 'https://digitalax.medium.com/fud-faq-a-weekly-community-thread-week-39-95f2e2012ec0'
    },
    {
      title: 'Week Forty',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-40-c4476d4ca2c'
    },
    {
      title: 'Week Forty One',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-41-c145b2e52fa2'
    },
    {
      title: 'Week Forty Two',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-42-46976191301d'
    },
    {
      title: 'Week Forty Three',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-43-1005ee5ce8bb'
    },
    {
      title: 'Week Forty Four',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-44-349bd8355722'
    },
    {
      title: 'Week Forty Five',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-45-1eac4e5e42dd'
    },
    {
      title: 'Week Forty Six',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-46-6d656d7991cd'
    },
    {
      title: 'Week Forty Seven',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-47-c0000380007b'
    },
    {
      title: 'Week Forty Eight',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-48-6d7e231d5fca'
    },
    {
      title: 'Week Forty Nine',
      link: 'https://blog.digitalax.xyz/fud-faq-a-weekly-community-thread-week-49-3f76784d1ec5'
    }
  ]
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <Head>
            <title> FUD FAQ </title>
          </Head>
          <div className={styles.topBanner}>
            <div className={styles.text}>
              FUD FAQ
            </div>
            <div className={styles.subText}>
              There is a lot of FUD in crypto and web3. This is your weekly guide to help you find your way and navigate what’s up with DIGITALAX.
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              {scopes.map((scope) => (
                <div className={styles.item} key={scope.title}>
                  <a href={scope.link} target="_blank" rel="noreferrer"> {scope.title} </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FudFaq;
