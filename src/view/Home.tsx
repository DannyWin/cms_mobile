import React, { useState } from 'react';
import {Flex,WingBlank,List,Picker,Button,WhiteSpace} from 'antd-mobile'
import {CustomIcon} from '../component/CustomIcon'
import StepLayout from '../layout/StepLayout'
import '../asset/style/home.less'

const locations=[{
    label: '北京',
    value: '01',
    children: [
      {
        label: '东城区',
        value: '01-1',
      },
      {
        label: '西城区',
        value: '01-2',
      },
      {
        label: '崇文区',
        value: '01-3',
      },
      {
        label: '宣武区',
        value: '01-4',
      },
    ],
  },
  {
    label: '浙江',
    value: '02',
    children: [
      {
        label: '杭州',
        value: '02-1',
        children: [
          {
            label: '西湖区',
            value: '02-1-1',
          },
          {
            label: '上城区',
            value: '02-1-2',
          },
          {
            label: '江干区',
            value: '02-1-3',
          },
          {
            label: '下城区',
            value: '02-1-4',
          },
        ],
      },
      {
        label: '宁波',
        value: '02-2',
        children: [
          {
            label: 'xx区',
            value: '02-2-1',
          },
          {
            label: 'yy区',
            value: '02-2-2',
          },
        ],
      },
      {
        label: '温州',
        value: '02-3',
      },
      {
        label: '嘉兴',
        value: '02-4',
      },
      {
        label: '湖州',
        value: '02-5',
      },
      {
        label: '绍兴',
        value: '02-6',
      },
    ],
  },];
  const units=[{
    label: '北京',
    value: '01',
    children: [
      {
        label: '东城区',
        value: '01-1',
      },
      {
        label: '西城区',
        value: '01-2',
      },
      {
        label: '崇文区',
        value: '01-3',
      },
      {
        label: '宣武区',
        value: '01-4',
      },
    ],
  },
  {
    label: '浙江',
    value: '02',
    children: [
      {
        label: '杭州',
        value: '02-1',
        children: [
          {
            label: '西湖区',
            value: '02-1-1',
          },
          {
            label: '上城区',
            value: '02-1-2',
          },
          {
            label: '江干区',
            value: '02-1-3',
          },
          {
            label: '下城区',
            value: '02-1-4',
          },
        ],
      },
      {
        label: '宁波',
        value: '02-2',
        children: [
          {
            label: 'xx区',
            value: '02-2-1',
          },
          {
            label: 'yy区',
            value: '02-2-2',
          },
        ],
      },
      {
        label: '温州',
        value: '02-3',
      },
      {
        label: '嘉兴',
        value: '02-4',
      },
      {
        label: '湖州',
        value: '02-5',
      },
      {
        label: '绍兴',
        value: '02-6',
      },
    ],
  },];

const Home:React.FC=()=>{
    const [location,setLocation]=useState();
    const [unit,setUnit]=useState();

    return (
        <StepLayout title="Home" current={1}>
            <WingBlank style={{flex:1}}>
                
                <div>What's your status today?</div>
                
                <Flex wrap="wrap" justify="center">
                    <CustomIcon type="#icon-home"/>
                    <CustomIcon type="#icon-home"/>
                    <CustomIcon type="#icon-home"/>
                    <CustomIcon type="#icon-home"/>
                    <CustomIcon type="#icon-home"/>
                    <CustomIcon type="#icon-home"/>
                </Flex>
                <List>
                    <List.Item>In what city are you located?</List.Item>
                    <Picker extra="Please select" title="Location" okText="Ok" dismissText="Cancel" data={locations} value={location} onOk={(val)=>setLocation(val)} >
                        <List.Item arrow="horizontal">Location</List.Item>
                    </Picker>
                    <List.Item>What bussiness unit do you work in?</List.Item>
                    <Picker extra="Please select" title="Unit" okText="Ok" dismissText="Cancel" cols={2} data={units} value={unit} onOk={(val)=>setUnit(val)} >
                        <List.Item arrow="horizontal">Unit</List.Item>
                    </Picker>
                </List>
                <WhiteSpace size="lg" />
                <Button type="primary" size='small' >Next</Button>
            </WingBlank>
        </StepLayout>
    )
}
export default Home