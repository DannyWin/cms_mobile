import React, { useState } from 'react';
import {TabBar} from 'antd-mobile'
import {CustomIcon} from '../component/CustomIcon'
import {IMainProps} from '../interface/interface'
import Home from '../component/Home';
import Survey from '../component/Survey';


const Main:React.FC<IMainProps>=(props)=>{
    const [isHidden,setIsHidden]=useState(false);
    const [selectedTab,setSelectedTab]=useState('Survey');

    return (
        <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" hidden={isHidden}>
            <TabBar.Item title="Survey" key="Survey" icon={<CustomIcon type="#icon-unorderedlist"></CustomIcon>} 
            selectedIcon={ <CustomIcon type="#icon-unorderedlist"></CustomIcon>}
            selected={selectedTab === 'Survey'}
            badge={0}
            onPress={() => setSelectedTab('Survey')}
          >
               <Survey {...props}/>
          </TabBar.Item>
          <TabBar.Item title="Home" key="Home" icon={<CustomIcon type="#icon-user"></CustomIcon>} 
            selectedIcon={ <CustomIcon type="#icon-user"></CustomIcon>}
            selected={selectedTab === 'Home'}
            badge={0}
            onPress={() => setSelectedTab('Home')}
          >
                <Home/>
          </TabBar.Item>
        </TabBar>
    )
}
export default Main