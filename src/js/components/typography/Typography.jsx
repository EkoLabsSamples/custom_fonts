import React from 'react';
import './Typography.scss';

export default class Typography extends React.Component{

    render(){
        return (
            <div className="page">
                <div className="container">
                    <span className="line-1">the</span>
                    <span className="line-2">Vintage</span>
                    <span className="line-3">typography experiment</span>
                    <span className="line-5"><a href="http://helloeko.com">Eko</a><a
                        href="http://developer.helloeko.com">Dev</a></span>
                    <span className="line-6">2025</span>
                </div>
            </div>
        )

    }
}