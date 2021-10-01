import React from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Home, Exchanges, CryptoCurrencies, CryptoDetails, Navbar, News } from './components/pages'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar></Navbar>
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <CryptoCurrencies />
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className="footer" >
                <Typography.Title level={5} style={{ color: 'white' , textAlign: 'center'}} >
                    Cryto Web <br />
                    All rights reserverd
                </Typography.Title>
                <Space>
                    <Link to="/"> Home</Link>
                    <Link to="/exchanges"> Exchanges</Link>
                    <Link to="/news"> News</Link>
                </Space>
            </div>
            </div>
        </div>
    )
}

export default App
