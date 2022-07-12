## Ejemplo

```
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
```