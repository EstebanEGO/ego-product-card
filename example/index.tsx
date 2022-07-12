import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductImage, ProductTitle } from '../.';
import ProductCard from '../dist/components';

const product = {
  id: '1',
  title: 'Hola'
}

const App = () => {
  return (
    <ProductCard  
      product={ product }           
      initialValues={ {
        count: 4,
        maxCount: 10
      }}
    >
      {
        ({ count, isMaxCountReached, increaseBy, reset }) => (
          <>
            <ProductImage />                
            <ProductTitle />
            <ProductButtons />                
          </>
        )
      }
    </ProductCard> 
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
