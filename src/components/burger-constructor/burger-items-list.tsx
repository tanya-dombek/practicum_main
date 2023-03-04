import React, {Component} from 'react'
import './burger-contructor.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {data} from '../../utils/data';
import {normalaizedData} from './order-data';

interface Props {
    
}
 
interface State {
    
}
const orderData = normalaizedData(data);
 
class BurgerItemsList  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        //this.state = { :  };
    }
    
    render() { 
        return ( 
            <div className='pb-10 orderContainer pr-4 scrollBar custom-scroll'>
                {orderData.map(item => {
                    let addIcon;
                    if (!item.isLocked) {
                        addIcon = <DragIcon type="primary" />
                    }
                    return <div className='ingredientIconContainer'>
                        {addIcon}
                        <ConstructorElement
                            type={item.type==='top' ? 'top' : item.type==='bottom' ? 'bottom' : undefined}
                            isLocked={item.isLocked}
                            text={item.text}
                            price={item.price}
                            thumbnail={item.thumbnail}
                        />
                    </div>
                })}
            </div>
         );
    }
}
 
export default BurgerItemsList ;