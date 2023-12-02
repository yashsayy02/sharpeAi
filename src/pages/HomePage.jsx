import React from 'react'
import SwitchPage from '../components/SwitchPage'

const HomePage = () => {
  return (
      <>
          <div className="text-center text-white font-bold text-8xl">HomePage</div>
          <div className="text-white">
              <SwitchPage page1="transactionPage" page2="dataPage" />
          </div>
      </>
  );
}

export default HomePage