import React, { Component } from 'react';
import Radio from './Radio'
class RadioGroup extends Component {
    handleActiveChange(value) {
        console.log(`${value}被选中了`)
        this.props.onChange(value)
    }
    render() {
        return (
            <div>
                {
                    // React.Children.map(this.props.children, child => {
                    //     let isActive = this.props.active === child.props.value ? true : false
                    //     return React.cloneElement(child, {
                    //         label: child.props.children,
                    //         value: child.props.value,
                    //         active: isActive,
                    //         onClick: this.handleActiveChange.bind(this)
                    //     })
                    // })
                    this.props.children.length && this.props.children.map(child => {
                        let isActive = this.props.active === child.props.value ? true : false
                        return React.cloneElement(child, {
                            label: child.props.children,
                            value: child.props.value,
                            active: isActive,
                            onClick: this.handleActiveChange.bind(this)
                        })
                    }) ||(
                    !this.props.children.length && this.props.items.map(item=> <Radio label={item.label} value={item.value} active={item.active}></Radio>
                    ))
                
                }
            </div>
        )
    }
}
export default RadioGroup;