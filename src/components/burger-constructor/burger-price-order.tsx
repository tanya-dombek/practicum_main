import React, {Component} from 'react'
import './burger-contructor.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

interface Props {
    
}
 
interface State {
    
}
 
class ComponentsInfo  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( 
            <div className='priceOrderContainer pr-4'>
                <div className='pr-10 priceIconContainer'>
                    <p className="text text_type_digits-medium">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium" >
                    Оформить заказ
                </Button>
            </div>
         );
    }
}
 
export default ComponentsInfo ;