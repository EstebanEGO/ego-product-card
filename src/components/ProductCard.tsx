import React from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';


export const ProductContext = React.createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    //children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ product, children, className, style, value, initialValues, onChange }: Props) => {    

    const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct( { product, value, initialValues, onChange } );
    return (
        <Provider value={{ 
            counter,
            product,
            maxCount,
            increaseBy
         }}>
            <div className={ `${ styles.productCard } ${ className }` } style={ style }>        
                { 
                    children({ 
                        count: counter,
                        isMaxCountReached,
                        maxCount,
                        product,
                        increaseBy,
                        reset
                    }) 
                }            
            </div>
        </Provider>
    )
}