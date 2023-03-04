import React, {Component} from 'react'
import './burger-ingredients.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsComponent from './ingredients-component'
import {data} from '../../utils/data';
import {normalaizedData} from './ingredients-data'

interface Props {
    
}
 
interface State {
    
}

const ingredientsData = normalaizedData(data);
 
 
class BurgerIngredients  extends Component<Props, State> {
    constructor(props:Props) {
        super(props);
        //this.state = { :  };
    }
    setCurrent(){

    }
    render() {
        return ( 
            <div className='ingredientsContainer'>
                <p className="text text_type_main-large mainP pt-10 pb-5">Соберите бургер</p>
                <div className='flexContent'>
                    <Tab value="one" active={true} onClick={this.setCurrent}>
                        Булки
                    </Tab>
                    <Tab value="two" active={false} onClick={this.setCurrent}>
                        Соусы
                    </Tab>
                    <Tab value="three" active={false} onClick={this.setCurrent}>
                        Начинки
                    </Tab>
                </div>
                <div className='scrollBar custom-scroll'>
                    <IngredientsComponent component='Булки' data={ingredientsData.Bread}/>
                    <IngredientsComponent component='Соусы' data={ingredientsData.Sauce}/>
                    <IngredientsComponent component='Начинки' data={ingredientsData.Toppings}/>
                </div>
                
            </div>
         );
    }
}
 
export default BurgerIngredients ;