import React from 'react'
function Dashboard() {
  return (
  <>
    <div className='main hv-100 wv-100 flex-col'>
        <div className='appbar hv-10 wv-100 flex theme-color justify-end items-center'>
Appbar
        </div>
        <div className='content-container hv-90'>
            <div className='leftbar wv-20 theme-bg hv-95'>
                Leftbar
            </div>
            <div className='content  theme-bg hv-95'>
                 content
            </div>
        </div>
    </div>
  </>
  );
}

export default Dashboard