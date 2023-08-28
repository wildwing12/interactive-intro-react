import React from 'react';
import {Link, Outlet} from "react-router-dom";
import '../../assets/css/default.css'
import '../../assets/css/index.css'

const Main = () =>{
    return (
        <div className='container'>
            <nav className="global-nav">
                <div className="global-nav-link">
                    <Link className="global-nav-item">Room</Link>
                    <Link className="global-nav-item">Ideas</Link>
                    <Link className="global-nav-item">Store</Link>
                    <Link className="global-nav-item">Content</Link>
                </div>
            </nav>
            <nav className='local-nav'>
                <div className="local-nav-link">
                    <Link className='product-name'>AirMug Pro</Link>
                    <Link>개요</Link>
                    <Link>제품사양</Link>
                    <Link>구입가격</Link>
                    <Link>구입하기</Link>
                </div>
            </nav>

            <Outlet />
            <footer className="footer">
                2023, Kim Jong Hak
            </footer>
        </div>


    )
}

export default React.memo(Main);