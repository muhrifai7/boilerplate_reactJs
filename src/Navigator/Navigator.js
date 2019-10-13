import React from 'react';
import { Switch,Route } from 'react-router-dom'


import Header from '../Layout/Home/Header/Header'
import Content from '../Layout/Home/Content/Content'
import ContentDetail from '../Layout/Home/Content/ContetnDetail'
import Footer from '../Layout/Home/Footer/Footer'
import Karir from '../Layout/Home/Karir/Karir'
import Register from '../Components/Register/SignUp'
import Login from '../Components/Register/Login'
import './Navigator.css'

const Navigator = ()=>  {
    return(
    
   
        <Switch>
            <Route path='/' component={Header} exact />
            <Route path='/content' component={Content} exact />
            <Route path='/footer' component={Footer} />
            <Route path='/karir' component={Karir} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/content/:id' component={ContentDetail} />
            {/* <Route component={Header} /> */}

        </Switch>
    )
}
export default Navigator