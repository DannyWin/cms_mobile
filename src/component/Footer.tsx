import React from 'react';
import {Flex} from 'antd-mobile'


const Footer:React.FC=()=>{
  return (
    <div style={{padding:"10px"}}>
      <Flex justify="center">
        <Flex.Item><strong>Privacy Statement</strong></Flex.Item>
        <Flex.Item><strong>|</strong></Flex.Item>
        <Flex.Item><strong>Term of Use</strong></Flex.Item>
      </Flex>
      <Flex>
        <Flex.Item>@2020 Xin All rights reserved</Flex.Item>
      </Flex>
    </div>
  )
}
export default Footer