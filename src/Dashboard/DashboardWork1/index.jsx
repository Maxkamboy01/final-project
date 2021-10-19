import React from 'react'
import { DashboardWork1Wrapper, DashboardWork1Wrapper1, DashboardWork1Wrapper2, DashboardWork1Wrapper3 } from './style';

function DashboardWork1() {
    return (
        <DashboardWork1Wrapper>
            <div>
                <p className="dashboard">Dashboard</p>
            </div>
            <DashboardWork1Wrapper1>
                <DashboardWork1Wrapper2>
                    <div><i className="fas fa-download"></i></div>
                    <p>Download report</p>
                </DashboardWork1Wrapper2>
                <DashboardWork1Wrapper3>
                    <div><i className="fas fa-calendar-alt"></i></div>
                    <p>6 April, 2021</p>
                    <div><i className="fas fa-chevron-down"></i></div>
                </DashboardWork1Wrapper3>
            </DashboardWork1Wrapper1>
        </DashboardWork1Wrapper>
    )
}

export default DashboardWork1;
