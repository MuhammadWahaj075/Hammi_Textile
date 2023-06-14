import React from 'react'
import Banner from "../components/banner/Banner"
import IconBox from '../components/iconbox/IconBox'
const Home = () => {
  return (
    <div id="main-content" class="site-main clearfix">
    <div id="content-wrap">
        <div id="site-content" class="site-content clearfix">
            <div id="inner-content" class="inner-content-wrap">
               <div class="page-content">
     <Banner />
     <IconBox />
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home