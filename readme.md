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

## Communication between components


1. Plan-picker is our wrapper inside we have `<plan>`
2. `<plan-template` has got binding to class if clicked plan is selected  based on Parent Component 
3. Parent Component get information from `<plan-template>`  thanks to : 

`$emit(nameOfEvent, payload)` to send custom events 
payload - event data 

## Naming Component 

- multi word like `todo-item` 
- BaseComponent : `BaseButton` or `AppButton`
- tightly coupled names: `TodoList` `TodoListItem` `TodoListItemButton`

