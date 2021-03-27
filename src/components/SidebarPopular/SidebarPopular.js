import React from 'react'
import './SidebarPopular.css'

import Button from '../Button/Button'
import PopularCard from './PopularCard/PopularCard'

function SidebarPopular()  {
    return (
        <div className='popular'>
            <h3 className='popular-title'>Most Popular</h3>
                <PopularCard />
                <PopularCard />
                <PopularCard />
            <Button name="Show All" />
        </div>
    );
}

export default SidebarPopular;