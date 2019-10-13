import React , { useContext,Component} from 'react';
import {Link} from 'react-router-dom'


import './Content.css'
import {NewsContex,UserConsumer} from '../../../Context/Context'
import {GlobalConsumer} from '../../../Context/Context'


// const Content = ()=> {
//   const [news,setNews]= useContext(NewsContex);
//   return (
    
//     <div class="ui grid">
//      {news.map(item => {
//        return <div key={item.id}
//        class="four wide column"><p>
//        <Link to={`/content/${item.id}`}>{item.name}</Link>
//        </p>
//               </div>
//      })}
//     </div>
  
//   )
// }
// export default Content

// class Content extends Component {
//   state = {  }
//   render(){
//     return (
//       <UserConsumer>
//       {
//         value => {
//           console.log(value)
//           return (
//                     <div>
//                     <button onClick={()=> value.dispatch({type : 'ADD'})}>Tambah</button>
//                             <p>{value.counter}</p>
//                       <div class="ui grid">
//                       {value.data[0].map(item => {
//                         return <div key={item.id}
//                         class="four wide column"><p>
//                         <Link to={`/content/${item.id}`}>{item.name}</Link>
//                         </p>
//                               </div>
//                       })}
//                     </div>
//                     </div>
//           )
//         }
//       }
//     </UserConsumer>
//     )
//   }
// }
 
// export default Content;


class Content extends Component {
  state = {  }
  render(){
    console.log('hoc',this);
    return (
     
                    <div>
                    <button onClick={()=> this.props.dispatch({type : 'ADD'})}>Tambah</button>
                            <p>{this.props.state.item}</p>
                      <div class="ui grid">
                      {this.props.state.news.map(item => {
                        return <div key={item.id}
                        class="four wide column"><p>
                        <Link to={`/content/${item.id}`}>{item.name}</Link>
                        </p>
                              </div>
                      })}
                    </div>
                    </div>
         
    )
  }
}
 
export default GlobalConsumer(Content);

