import React ,{ useState,useEffect} from 'react'
import axios from 'axios'


const NewProvider = ({match})=> {

    useEffect(()=> {
        fetchData()
        // console.log(match.params.id)
    },[]);

    const [item, setItem] = useState({
        address : {},
        company : {}
});

    const fetchData = async()=> {
        await axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
        .then(response => {
            console.log(response.data);
           setItem(response.data)
        })
    }
    
    return (
       <ul>
           <li>
               {item.name}
           </li>
           <li>
               {item.email}
           </li>
           <li>
               {item.address.street}
           </li>
           <li>{item.company.catchPhrase}</li>
       </ul>
    )
}

export default NewProvider
 