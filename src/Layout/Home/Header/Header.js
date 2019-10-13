import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'

import './Landing.css'
import FollowMe from '../../../Components/FollowMe/FollowMe'

class Landing extends Component {
  state = { 
    post : [],
    loading : true
   }

  componentDidMount(){
    console.log(this.props)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const post = response.data.slice(0,2);
        const update = post.map(pos => {
          return {
            ...pos
          }
        })
        console.log(update);
        this.setState({post : update,loading : false})
      })
  }
   

  render() { 
    const load = this.state.loading
    console.log('data', this.state.post)
    return ( 
    <div>
      <div className="imgWraper">
          <div className="Info">
              <div style={{display:'flex',justifyContent:'center',marginBottom:'50px'}}>
                <h1>Taulah</h1>
              </div>

              <div class="ui vertically divided grid">
                
                {load ? <h4>Loading ....</h4>
                :
                 
                  <div class="two column row">
                    {this.state.post.map((value,i)=> {
                      return (
                        <div class="column">
                        <p key={i}>{value.body}</p>
                        <button class="ui inverted button">Info Lebih</button>
                        </div>
                      )
                    })}
                   </div>
                  }  
              </div>
            </div> 
      </div>
      {/* <div className="parentBanner">
            <div className="Banner">
              <h1>Tentang Kami</h1>
            </div>
            <div className="Banner">
              <h1>Kontak Kami</h1>
            </div>
      </div> */}
      <FollowMe />
    </div>
    );
  }
}
Landing.propTypes = {
  name: PropTypes.string
}


export default Landing;

