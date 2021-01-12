import { List, Radio, WhiteSpace } from 'antd-mobile';
import React from 'react';
import SingleSelect from '../../component/question/SingleSelect';
import Essay from '../../component/question/Essay';
import MultiSelect from '../../component/question/MultiSelect';
import ShortAnswer from '../../component/question/ShortAnswer';
import { IQuestion } from '../../interface/interface';
import { questionSort } from '../../util/const';

// interface Props extends React.MapHTMLAttributes<HTMLElement>{
//   style?: React.CSSProperties,
//   className?: string,
//   title?:string,
//   current:number
// }

const ListLayout:React.FC<IQuestion>=(props)=>{
    return (
        <>
            <List renderHeader={() => props.index+"."+props.content}>
            {(props.sort.id===questionSort.singleSelect && <SingleSelect {...props} ></SingleSelect>)
                        || (props.sort.id===questionSort.multiSelect && <MultiSelect {...props} ></MultiSelect>)
                        || (props.sort.id===questionSort.shortAnswer && <ShortAnswer {...props} ></ShortAnswer>)
                        || (props.sort.id===questionSort.essay && <Essay {...props} ></Essay>)
                    
                }
            </List>
            <WhiteSpace size="lg" />
        </>
    )
}
export default ListLayout