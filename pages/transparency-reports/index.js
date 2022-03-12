import React from "react";
import Head from "next/head"
import Layout from "../../components/layout";
import styles from "./styles.module.scss";

const TransparencyReports = () => {
  const reports = [
    {
      title: 'October ‘20 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-november-12th-2020-36b1da78c09c'
    },
    {
      title: 'November ‘20 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-november-27th-2020-ac33b99b1250'
    },
    {
      title: 'December ‘20 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-december-30th-2020-d5c6b5665b85'
    },
    {
      title: 'January ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-january-31st-2021-998cb32f198a'
    },
    {
      title: 'February ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-february-28th-2021-55da9ed10bb8'
    },
    {
      title: 'March ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-march-31st-2021-7dd878756705'
    },
    {
      title: 'April ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-april-30th-2021-3834e8c2d16c'
    },
    {
      title: 'May ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-may-31st-2021-ec7070f40cd7'
    },
    {
      title: 'June ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-june-30th-2021-80b0a1ae3d3a'
    },
    {
      title: 'July ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-july-31st-2021-c7549fa7a0aa'
    },
    {
      title: 'August ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-august-31st-db321d00715'
    },
    {
      title: 'September ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-september-30th-2021-b146fc4dabe6'
    },
    {
      title: 'October ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-october-31st-2021-38383898578e'
    },
    {
      title: 'November ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-november-30th-2021-c44659144183'
    },
    {
      title: 'December ‘21 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-december-31st-2021-d502236f5043'
    }, 
    {
      title: 'January ‘22 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-january-31st-2022-2f55130354eb'
    },
    {
      title: 'February ‘22 Transparency Report',
      link: 'https://blog.digitalax.xyz/transparency-report-february-28th-2022-ffe39d99978e'
    }
  ]
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <Head>
            <title> Transparency Reports</title>
          </Head>
          <div className={styles.topBanner}>
            <div className={styles.text}>
              Transparency Reports
            </div>
            <div className={styles.subText}>
              Every month we release a Transparency Report to the community covering our expenditure, burn rates and resource allocation. It’s one of our committments to building in the open bazaar and maintaining a web3 ethos.
            </div>
          </div>
          <div className={styles.content}>
            {reports.map((scope) => (
              <div className={styles.item} key={scope.title}>
                <a href={scope.link} target="_blank" rel="noreferrer"> {scope.title} </a>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TransparencyReports;
