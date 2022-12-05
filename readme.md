# Component 
## First
-> encapsulate functionaltiiy 
typing `.component(name, {object})`
component are not bound to markup

## Seperation of concerns
```    
<script type="text/x-template" id="click">
```
## Reusable component
to pass props
```
   props: {
        name: {type: String, required: true}
    }
```
## Register Global and Local
`app.component` -> global registration 
with global -> increase size of JS download in bundle

we can define as js object and register locally : 
`components` option to register locally 