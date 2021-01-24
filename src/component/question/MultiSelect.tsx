import React from 'react';
import {withRouter} from 'react-router';
import {Card,List,Checkbox,WhiteSpace} from 'antd-mobile'
import {observer,inject} from 'mobx-react'
import {IMultiSelectProps} from '../../interface/interface'


const MultiSelect:React.FC<IMultiSelectProps>=(props)=>{
    //const [selectedIds,changeSelectedId]=useState<Array<number>>([]);
    let selectedIds:Array<number>=[];
    function changeSelectedId(id:number){
        const index=selectedIds.indexOf(id);
        if(index===-1){
            selectedIds.push(id);
        }else{
            selectedIds.splice(index,1);
        }
        if(props.OptionMobx){
            console.log(selectedIds);
            props.OptionMobx!.setSelectedOption({qid:props.id,oids:selectedIds})
        }
    }

    return (
        <>
            <List renderHeader={() => props.index+"."+props.content}>
                {props.options.map(option => (
                    <Checkbox.CheckboxItem key={option.id}  onChange={() => changeSelectedId(option.id)}>
                        {option.content}
                    </Checkbox.CheckboxItem>
                ))}
            </List>
            <WhiteSpace size="lg"/>
        </>
  )
}
export default inject('OptionMobx')(withRouter(observer(MultiSelect)))