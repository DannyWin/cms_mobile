import React from 'react'
import {Flex,Button} from 'antd-mobile'
import {withRouter} from 'react-router';
import {observer,inject} from 'mobx-react'
import {IQuestionFooterProps} from '../interface/interface'


const QuestionFooter:React.FC<IQuestionFooterProps>=(props)=>{
  const index=props.location.pathname.lastIndexOf('/');
  const path=props.location.pathname.slice(0,index);
  function goTo(id:number):any{
    if(props.OptionMobx){
        props.OptionMobx.addIds();
    }
    props.history.push(`${path}/${id}`);
  }
  function submit(){
      
  }
  return (
      <Flex justify="center">
            <Flex.Item><Button type="primary" size='large' onClick={goTo(props.prev)}>Back</Button></Flex.Item>
            {props.next!==-1 ?<Flex.Item><Button type="ghost" size='large' onClick={goTo(props.next)}>Next</Button></Flex.Item>
            :<Flex.Item><Button type="ghost" size='large' onClick={submit}>Submit</Button></Flex.Item>}
      </Flex>
  )
}
export default inject('OptionMobx')(withRouter(observer(QuestionFooter)))