import React from 'react'
import {Flex} from 'antd-mobile'
import '../asset/style/footer.less'


const Footer:React.FC=()=>{
  return (
    <div className="footer">
      <Flex justify="center">
        <Flex.Item><strong>Privacy Statement</strong></Flex.Item>
        <strong>|</strong>
        <Flex.Item><strong>Term of Use</strong></Flex.Item>
      </Flex>
      <Flex className="copyRight">
        <Flex.Item>@2020 Xin All rights reserved</Flex.Item>
      </Flex>
    </div>
  )
}
export default Footer