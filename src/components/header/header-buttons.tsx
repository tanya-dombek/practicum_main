import React, {Component} from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import './header.css';

interface Props {
    icon: any,
    name: string,
    active: boolean,
}
 
interface State {
    
}
 
class HeaderButton extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        const isActive = this.props.active ? 'text text_type_main-default ml-2' : 'text text_type_main-default text_color_inactive ml-2'
        return (
            <Button htmlType="button" type="secondary" size="small" style={{ display: 'flex' }} >
                {this.props.icon}
                <p className={isActive}>
                    {this.props.name}
                </p>
            </Button>
        );
    }
}
 
export default HeaderButton;