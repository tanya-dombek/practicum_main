import React, {Component} from 'react'
import './burger-ingredients.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

interface Props {
    component: string
    data: Array<any>
}
 
interface State {
    
}

class IngredientsComponent  extends Component<Props, State> {
    constructor(props:Props) {
        super(props);
        //this.state = { :  };
    }

    render() {
        return ( 
            <div >
                <p className="text text_type_main-medium pt-10 pb-6">{this.props.component}</p>
                <div className='pl-4 pr-4 ingredientsGroup'>
                   { this.props.data.map(item => {
                        let addIcon;
                        if (item.count !== '0') {
                            addIcon = <Counter count={item.count} size="default" extraClass="m-1" />
                        }
                        return <div className='ingredientContainerStyle'>
                                    {addIcon}
                                    <img srcSet={item.thumbnail} className='imgChanges' />
                                    <div className='ingredientStyle'>
                                        <p className="text text_type_digits-default">{item.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <p className="text text_type_main-default textAlign">{item.name}</p>
                        </div>
                    })}
                </div>
            </div>
         );
    }
}
 
export default IngredientsComponent ;