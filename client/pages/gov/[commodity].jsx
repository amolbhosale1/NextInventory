import styles from "../../styles/css/GovCommodity.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10&filters[commodity]=Onion&filters[state]=Maharashtra");
  const data = await res.json();
  const paths = data.records.map((ddd) => {
    return {
      params: {
        commodity: ddd.market,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.commodity;
  const res = await fetch(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10&filters[commodity]=Onion&filters[state]=Maharashtra&filters[market]=${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};



const commodity = ({ data }) => {
  //console.log(data)
  let On = data.records;
  //console.log(On)
  return (
    <>
    
      <h5>{On[0].arrival_date}</h5>
      {On.map((ddd) => (
      <div key={ddd.market} className={`${styles.ssr_styles } ${styles.ssr_styles_inside}`}>
          <h5>{ddd.district + "___"}</h5>
          <h5>{"(" + ddd.market + ")"}</h5>
          <h5 className="mx-3">{ddd.commodity}</h5>
          <h5>{ddd.modal_price}</h5>
        </div>
      ))}
    </>
  );
};

export default commodity;

