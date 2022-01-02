import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/css/GovCommodity.module.css";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10&filters[commodity]=Onion&filters[state]=Maharashtra`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}


const gov = ({ data }) => {
  let On = data.records;
  //console.log(On)

  return (
    <>
      {On !== null ?
        (<h5>{On[0].arrival_date}</h5>,
          On.map((ddd) => (
            <Link href={`/gov/${ddd.market}`}>
              <div key={ddd.market} className={styles.ssr_styles}>
                <h5>{ddd.district + "___"}</h5>
                <h5>{"(" + ddd.market + ")"}</h5>
                <h5 className="mx-3">{ddd.commodity}</h5>
                <h5>{ddd.modal_price}</h5>

              </div>
            </Link>
          ))
        )
        : (<h1>Data Not Updated  Now</h1>)}

    </>
  );

};

export default gov;