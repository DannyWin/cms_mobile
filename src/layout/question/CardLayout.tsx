import React from 'react';
import {Card} from 'antd-mobile'
import { IQuestion } from '../../interface/interface';
import { questionSort } from '../../util/const';
import SingleSelect from '../../component/question/SingleSelect';
import Essay from '../../component/question/Essay';
import MultiSelect from '../../component/question/MultiSelect';
import ShortAnswer from '../../component/question/ShortAnswer';

// interface Props extends React.MapHTMLAttributes<HTMLElement>{
//   style?: React.CSSProperties,
//   className?: string,
//   title?:string,
//   current:number
// }

const CardLayout:React.FC<IQuestion>=(props)=>{
    return (
        <Card>
            <Card.Header title={props.index +"." +props.content}/>
            <Card.Body>
                {(props.sort.id===questionSort.singleSelect && <SingleSelect {...props} ></SingleSelect>)
                        || (props.sort.id===questionSort.multiSelect && <MultiSelect {...props} ></MultiSelect>)
                        || (props.sort.id===questionSort.shortAnswer && <ShortAnswer {...props} ></ShortAnswer>)
                        || (props.sort.id===questionSort.essay && <Essay {...props} ></Essay>)
                    
                }
            </Card.Body>
            {/* <Card.Footer content={<Button type="ghost" onClick={()=>goBack()}>Back</Button>} extra={<Button type="primary" onClick={()=>goNext()}>Next</Button>} /> */}
    </Card>
    )
}
export default CardLayout