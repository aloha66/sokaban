## sokaban

根据原型，可划分
- map
- player
- cargo
- target

## Game
### map
用二维数组

## Edit
分为
- 地图编辑器
- 数据展示区
- 元素选择区

### 元素选择区 EditElementView
需要选择其中一个元素，重构前使用if else的组织方式
重构后使用多态
```
export interface EditElement {
  name: string
  img: string
  execute: (position: Position) => void
}

<EditElement :edit-element="wallEditElement" />
```

#### 可选择的元素 EditElement
一张图片和一个点击选中的事件
```ts
const { setCurrentSelectedEditElement } = useEditElementStore()


function handleClick() {
setCurrentSelectedEditElement(props.editElement)

}
```
点击事件,设置当前元素和对应的执行方法

#### 地图方块 MapBlock
把设置好的选中方法表现出现
```
getCurrentSelectedEditElement()?.execute(props)
```

