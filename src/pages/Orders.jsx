import React from "react";
import '@styles/orders.scss'
import flechita from '@icons/flechita.svg'

const Orders = () => {
    return (
    <div className="orders">
        <h2 className="title">Orders</h2>
            <div className="order-card">
                <div className="info">
                    <p className="date">04.25.2021</p>
                    <p className="quantity">5 articles</p>
                </div>
                <div className="right">
                    <p className="total-price">$ 560.00</p>
                    <img src={flechita} alt="flechita" />
                </div>        
            </div>
            <div className="order-card">
                <div className="info">
                    <p className="date">04.25.2021</p>
                    <p className="quantity">5 articles</p>
                </div>
                <div className="right">
                    <p className="total-price">$ 560.00</p>
                    <img src={flechita} alt="flechita" />
                </div>        
            </div>
            <div className="order-card">
                <div className="info">
                    <p className="date">04.25.2021</p>
                    <p className="quantity">5 articles</p>
                </div>
                <div className="right">
                    <p className="total-price">$ 560.00</p>
                    <img src={flechita} alt="flechita" />
                </div>        
            </div>
            <div className="order-card">
                <div className="info">
                    <p className="date">04.25.2021</p>
                    <p className="quantity">5 articles</p>
                </div>
                <div className="right">
                    <p className="total-price">$ 560.00</p>
                    <img src={flechita} alt="flechita" />
                </div>        
            </div>
            <div className="order-card">
                <div className="info">
                    <p className="date">04.25.2021</p>
                    <p className="quantity">5 articles</p>
                </div>
                <div className="right">
                    <p className="total-price">$ 560.00</p>
                    <img src={flechita} alt="flechita" />
                </div>        
            </div>
            <div className="order-card">
                <div className="info">
                    <p className="date">04.25.2021</p>
                    <p className="quantity">5 articles</p>
                </div>
                <div className="right">
                    <p className="total-price">$ 560.00</p>
                    <img src={flechita} alt="flechita" />
                </div>        
            </div>
            <div className="order-card">
                <div className="info">
                    <p className="date">04.25.2021</p>
                    <p className="quantity">5 articles</p>
                </div>
                <div className="right">
                    <p className="total-price">$ 560.00</p>
                    <img src={flechita} alt="flechita" />
                </div>        
            </div>
    </div>
    )
}

export default Orders;
