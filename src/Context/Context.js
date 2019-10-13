// import React ,{ useState,createContext,useEffect} from 'react'
// import axios from 'axios'

// export const NewsContex = createContext({})

// export const NewsProvider = (props)=> {

//     useEffect(()=> {
//         fetchData()
//     },[])
    
//     const [news, setNews] = useState([]);
//     const [item, setItem] = useState(0);

//     const fetchData = async()=> {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//            setNews(response.data)
//         })
//     }
//     const dispatch = (action)=> {
//         if(action.type === "ADD"){
//             setItem(item + 1 )
//         }
//     }
    
//     return (
//         <NewsContex.Provider value={
//             {data : [news,setNews], counter : [item, setItem],dispatch:dispatch }
//             }>
//             {props.children}
//         </NewsContex.Provider>
//     )
// }

// export const UserConsumer = NewsContex.Consumer

import React ,{ createContext,Component } from 'react'
import axios from 'axios'

const NewsContex = createContext();
const Provider = NewsContex.Provider;

const GlobalProvider = (Children)=> {
    return (
        class ParentComp extends Component {
            state={
                news : [],
                item : 0
            }
            componentDidMount(){
                this.fetchData()
            }
            fetchData = async()=> {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
            this.setState({news : response.data})
            })
            }
            dispatch = (action)=> {
            if(action.type === "ADD"){
                this.setState({
                    item : this.state.item + 1
                })
            }
            }
            render(){
                return (
                    <Provider value={
                        {
                            state:this.state,
                            dispatch:this.dispatch 
                            }
                    }>
                        <Children {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider


//consumer
const Consumer = NewsContex.Consumer;

export const GlobalConsumer = (Children)=> {
    return (
        class ParentConsumer extends Component {
            state = {  }
            render() { 
                return ( 
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value}/>
                                )
                            }
                        }
                    </Consumer>
                 );
            }
        }
        )
    }
    













