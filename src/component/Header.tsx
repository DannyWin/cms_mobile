import React from 'react';
import {Flex} from 'antd-mobile'
//import {Flex,NavBar,Popover,WhiteSpace,WingBlank, InputItem} from 'antd-mobile'
import {CustomIcon} from '../component/CustomIcon'
import Step from '../component/Step'
import '../asset/style/header.less'
interface Props {
  title?: string,
  current?:number
}

const Header:React.FC<Props>=(props)=>{
  return (
    <div className="header">
      <Flex>
        <Flex.Item><CustomIcon type="#icon-user"></CustomIcon></Flex.Item>
        <Flex.Item><strong>Company</strong></Flex.Item>
        <Flex.Item><CustomIcon type="#icon-menu"></CustomIcon></Flex.Item>
      </Flex>
      <div className="title"><strong>{props.title}</strong></div>
      {props.current !==undefined && <Step current={props.current}></Step>}
    </div>
      // <>    
      //    <div style={{display:'flex',alignItems:'center',height:'100%'}}>
      //     <WingBlank style={{flex:1}}>
              
      //         <div>Checkin Sysytem</div>
      //         <InputItem placeholder="uid">
      //             <CustomIcon type="#icon-user"></CustomIcon>
      //         </InputItem>

      //         <InputItem placeholder="pwd" type='password' extra={<CustomIcon type="#icon-eye"></CustomIcon>}>
      //             <CustomIcon type="#icon-lock"></CustomIcon>
      //         </InputItem>

      //         <WhiteSpace size="lg" />
      //         <NavBar
      //             mode="light"
      //             rightContent={
      //               <Popover mask
      //                 overlayClassName="fortest"
      //                 overlayStyle={{ color: 'currentColor' }}
      //                 visible={this.state.visible}
      //                 overlay={[
      //                   (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
      //                   (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
      //                   (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
      //                     <span style={{ marginRight: 5 }}>Help</span>
      //                   </Item>),
      //                 ]}
      //                 align={{
      //                   overflow: { adjustY: 0, adjustX: 0 },
      //                   offset: [-10, 0],
      //                 }}
      //                 onVisibleChange={this.handleVisibleChange}
      //                 onSelect={this.onSelect}
      //               >
      //                 <div style={{
      //                   height: '100%',
      //                   padding: '0 15px',
      //                   marginRight: '-15px',
      //                   display: 'flex',
      //                   alignItems: 'center',
      //                 }}
      //                 >
      //                   <Icon type="ellipsis" />
      //                 </div>
      //               </Popover>
      //             }
      //           >
      //             NavBar
      //           </NavBar>
      //         {/* <Flex>
      //             <Flex.Item><CustomIcon type="#icon-user"></CustomIcon></Flex.Item>
      //             <Flex.Item><label>Cancel</label></Flex.Item>
      //             <Flex.Item><label>Cancel</label></Flex.Item>
      //         </Flex> */}
             
      //     </WingBlank>
      //     </div>
      // </>
  )
}
export default Header