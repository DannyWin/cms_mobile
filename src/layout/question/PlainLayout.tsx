import { List, Radio, WhiteSpace } from 'antd-mobile';
import React from 'react';
import SingleSelect from '../../component/question/SingleSelect';
import Essay from '../../component/question/Essay';
import MultiSelect from '../../component/question/MultiSelect';
import ShortAnswer from '../../component/question/ShortAnswer';
import { IQuestion } from '../../interface/interface';
import { questionSort } from '../../util/const';


const PlainLayout:React.FC<IQuestion>=(props)=>{
    return (
        <ul> { props.index+"."+props.content}
            <li>
                {(props.sort.id===questionSort.singleSelect && <SingleSelect {...props} ></SingleSelect>)
                    || (props.sort.id===questionSort.multiSelect && <MultiSelect {...props} ></MultiSelect>)
                    || (props.sort.id===questionSort.shortAnswer && <ShortAnswer {...props} ></ShortAnswer>)
                    || (props.sort.id===questionSort.essay && <Essay {...props} ></Essay>)
                
                }
            </li>
        </ul>
    )
}
export default PlainLayout