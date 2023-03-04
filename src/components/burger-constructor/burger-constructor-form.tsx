import React, {Component} from 'react'
import './burger-contructor.css'
import BurgerItemsList from './burger-items-list';
import ComponentsInfo from './burger-price-order'

interface Props {
    
}
 
interface State {
    
}
 
class BurgerConstructor  extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( 
            <div className='constructorContainer pt-25 pl-4 pr-4'>
                <BurgerItemsList/>
                <ComponentsInfo/>
            </div>
         );
    }
}
 
export default BurgerConstructor ;