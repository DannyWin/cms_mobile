import React from 'react';
import {Steps} from 'antd-mobile'
import {CustomIcon} from '../component/CustomIcon'
import '../asset/style/step.less'
interface IProps {
  current?: number,
}

const Step:React.FC<IProps>=(props)=>{
  const steps = [{
    title: 'Working Mode',
  }, {
    title: 'Ability to Work',
  }, {
    title: 'Impact Factor',
  }].map((s, i) => <Steps.Step key={i} title={s.title} icon={ <CustomIcon type="#icon-check-circle"></CustomIcon>}  />);
  return (
    <Steps direction="horizontal" {...props}>{steps}</Steps>
  )
}
export default Step