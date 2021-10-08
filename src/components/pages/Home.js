import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../../services/cryptoApi'
import { CryptoCurrencies, News} from './index'

function Home() {

    const {data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats

    if(isFetching) return 'Loading'

    //console.log(`Prueba de .env ${process.env.REACT_APP}`)

    return (
        <>
            <Typography.Title level={2} className="heading">Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-tittle">Top 10 Cryptocurrencies</Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Typography.Title>
            </div>
            <CryptoCurrencies simplified />
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-tittle">Crypto news</Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to="/news">Show more</Link></Typography.Title>
            </div>
            <News simplified />
        </>
    )
}

export default Home
