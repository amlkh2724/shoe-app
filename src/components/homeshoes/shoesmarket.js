import React, { useState, useEffect } from "react";
import API from "../../utils/api";
import './shoe.css'
const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    async function fetchShoes() {
      try {
        const shoesData = await API.getShoes();
        setShoes(shoesData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchShoes();
  },[shoes]);

  const handleDelete = async (description) => {
    try {
      await API.deleteShoes(description);
      setShoes((prevShoes) => prevShoes.filter((shoe) => shoe.description !== description));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (description, field) => {
    try {
      await API.editShoes(description, field);
      const updatedShoes = await API.getShoes();
      setShoes(updatedShoes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="shoes-container">
      {shoes.map((shoe) => (
        <div className="shoe-card" key={shoe.id}>
          <img
            alt={shoe.description}
            src={shoe.imgUrl}
            width='300px'
            height='200px'
          />
          <h2>{shoe.description}</h2>
          <h3>${shoe.price}</h3>
          <div className="shoe-card-actions">
            <button onClick={() => handleDelete(shoe.description)}>Delete</button>
            <button onClick={() => handleEdit(shoe.description, `description*setdescription`)}>Edit description</button>
            <button onClick={() => handleEdit(shoe.description, `price*${+shoe.price + 10}`)}>Increase price</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shoes;




// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/rules-of-hooks */
// import './App.css';
// import API from '../../utils/api';
// import { useState, useEffect } from 'react';
// // import CARD from '../card';
// function Shoes() {
//   const [data, setData] = useState([]);

// const Shoes = () => {
//   const [shoes, setShoes] = useState([]);

//   useEffect(() => {
//     const fetchShoes = async () => {
//       try {
//         const data = await API.getShoes();
//         setShoes(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchShoes();
//   }, []);

//   // render the list of shoes using the `shoes` state variable
//   // ...
// };
// export default Shoes

//   useEffect(() => {
//     const fetchData = async () => {
//       await API.getShoes().then((res) => setData(res));
//     }
//     fetchData();


//     // const fetchData = async () => {
//     //   const response = await API.getShoes().then(setData(response));
//     // }

//     //API.editShoes('Nike for men', 'imgUrl*https://lh3.googleusercontent.com/0XSqTkNbLKY8sUw3zcejvjQKO5oH_ob4jBrDUl2f8nHHCy-3OKllX0cD8bbTN6YOMwD53uJQT3td9-fHwXcMdluR9egSZEKvkwspLSc4KxuB0QJ6pbNk2H3FFknP_e3DeGZQEnk90l22gCxEymF7x5_yDMC0QS1NJUnND3fV_w_n4RSw5dhfzYqRRPXBhtoB6iXgoxgXi20jorZwBcyoi2WJvhOG3O4v4nxqPf28FgVCCXcFzGEqAk26S_Tz2A69MmNwURNXBzSNkf03cIdaFNC7qy1cWrsZCPrdLkMX92gSt9DLYb_tit76gYS-3Q_EPECMm_Wy_kEJc2otEK1HcfpKjehQwu_0-LQuEgvGjHU9NprYu_c7Quc0Pb0AoIKlVUwEI_SOekROV7KT11o2bkjvmkz6n69nMacepHbtREeiB7nGmVM5IniN5lWANB5qQipcs85NGLZSVYyzsz7dSgMuqorR2IYHSAg6Hi22wh2uMYkEkFhtXYmcvirJpyG0jIxT_UvbKJkAtUoHibjAMbExO5zsQrpv-G3G_5mF3FI0BH035T9nGxa8d3gHC3xk1jPJYESGmiibHqObEHyiJbC4VBl3YcbHN-dTtABbysyfwloblenvvqTr0tLLUCgxTTSl7rgVJ4uMeA5DVfMhK3C6bLP1FWenPsxc9APwNnMNS5auSwmmjM0Qs0pg-bpDj9SCzxYExuLDqsY9PQPf9ze66piSXhObvTBHHXvzGjnBsKjm97q998c4dcVgazz6tgQy8leTWoOvLJzW244cHARQFkv1pl2BxQjAc3RCZJFtGykxLV8XqJ3ASgAEY_7_PC2TcLe8ymD1BOphCd2et6t5lxYZzD6hjXSzR3UMMVbarD6BmyRIgyC0Gpfq5CA84q2TqX4jAGL0l56tAMInfqXcRQFA_cLAm0QC_h__mKmX=w513-h340-no?authuser=0');
//     // API.deleteShoes('cool shoes');
//     // API.addShoes({
//     //   imgUrl: '123.com',
//     //   description: '123_desc',
//     //   price: 100
//     //   });
//   }, []);

//   return (
//     <div className='card'>
//       {data.map((item) => {
//         return (
//           <div key={item.id}>
//             <img
//               alt={item.description}
//               src={item.imgUrl}
//               width='300px'
//               height='200px'
//             />
//             <p>{item.description}</p>
//             <p>Price: ${item.price}</p>
//             <button>delete</button>
//           </div>
//         )
//       })}
//     </div>
//   );
// }

// export default Shoes;
