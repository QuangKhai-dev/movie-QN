import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="body_error">
            <div className="scene">
                <div className="text"></div>
                <div className="text">Úi hình như trang bạn tìm không có o(TヘTo)</div>
                <br /><br />
                <Link className="text" to={'/'}>Về trang chủ</Link>
                <div className="sheep">
                    <span className="top">
                        <div className="body" />
                        <div className="head">
                            <div className="eye one" />
                            <div className="eye two" />
                            <div className="ear one" />
                            <div className="ear two" />
                        </div>
                    </span>
                    <div className="legs">
                        <div className="leg" />
                        <div className="leg" />
                        <div className="leg" />
                        <div className="leg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error