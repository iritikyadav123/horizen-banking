import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const HOME = () => {
  const loggedIn = {firstName: "Ritik", lastName: "Yadav", email : "iritikyadav@gmail.com"}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest'} 
                subtext= "Access and manage your account and transaction efficienty"/>
                <TotalBalanceBox 
                 accounts={[]}
                 totalBanks={1}
                 totalCurrentBalance={87999.2}
                />
            </header>
             RECENT TRANSACTION
        </div>
        <RightSidebar 
         user={loggedIn}
         transactions={[]}
         banks={[{currentBalance: 1234.23}, {currentBalance: 1234.50}]}
        />
    </section>
  )
}

export default HOME