
// export const getDataBackend= async ()=>{
//   const res = await fetch(`/inventorytableget`, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     });
//     const data = await res.json();
//     //console.log(data)
//      // return data;
   
//     // let bbb=data.map((usr) => (
//     //   usr._id.toString()
//     //  )
//     //  )
//     //   return bbb
//     //  console.log(bbb)
//     let bbb = data.map((usr) => {
//       return {
//         ghrh: {
//           invData: usr._id.toString(),
//         },
//       };
//     })
  
//    return bbb
// };

// export const getDataBack= async ({ghrh})=>{
//   //getDataBackend();

//  let fff=ghrh.invData
//  return fff
// };




export const getStaticPaths = async () => {
  try {
    const res = await fetch("/inventorytableget", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    let paths = data.map((usr) => {
      return {
        params: {
          invData: usr._id.toString(),
        },
      };
    });
  
    return {
      paths,
      fallback: true,
    }
  } catch (err) {
    console.log("gcgj")
    console.log(err); 
 
  }
};

export const getStaticProps = async (context) => {
  //try {
    const pathid = context.params.invData;
    console.log(pathid)
    const res = await fetch(`/inventorytableget?_id=${pathid}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    // console.log("data")
    return {
      props: {
        data,
      },
    };

  // } catch (err) {
  //   console.log("gcgj")
  //   console.log(err); 
 
  // }
};


const invSep = ({ data }) => {
 // const router=useRouter();
    // console.log(data)
  // let ie=getDataBackend();
  // console.log(ie)
    return (
      <>
        {/* <h1>{data.cname}</h1> */}
      </>
    );
  };
  
  export default invSep;