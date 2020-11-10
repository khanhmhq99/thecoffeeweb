import React from 'react';
import Navbar from './conponents/layout/Navbar'
import Sidenav from './conponents/layout/Sidenav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './conponents/auth/SignIn'
import SignUp from './conponents/auth/SignUp'
import Dashboard from './conponents/dashboard/Dashboard'
import ProductAddPage from './page/ProductAddPage'
import ProductEditPage from './page/ProductEditPage'
import ProductDetailPage from './page/ProductDetailPage'
// import Footer from './conponents/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sidenav />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/product/add' component={ProductAddPage} />
          <Route path='/product/:id/edit' component={ProductEditPage} />
          <Route path='/product/:id/detail' component={ProductDetailPage} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
