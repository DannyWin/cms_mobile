import React from 'react'
import {Flex,Button} from 'antd-mobile'
import {withRouter,RouteComponentProps} from 'react-router';

interface IProps extends RouteComponentProps{

}


const QuestionFooter:React.FC<IProps>=(props)=>{
  const location=props.location;
  function goBack(){}
  function goNext(){}

  return (
      <Flex justify="center">
            <Flex.Item><Button type="primary" size='large' onClick={goBack}>Back</Button></Flex.Item>
            <Flex.Item><Button type="ghost" size='large' onClick={goNext}>Next</Button></Flex.Item>
      </Flex>
  )
}
export default withRouter(QuestionFooter)