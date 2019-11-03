# catch-click-outside

## 简介

本项目为基于 vue 的自定义指令，主要作用是点击除绑定该指令以外的 DOM 元素时，触发绑定在该指令上的事件。

## 为什么要重复造轮子

能够解决这个问题的指令很多，有基于各种前端流行框架的实现。自己造是因为我在使用 v-click-outside 指令时遇到的一个 BUG，绑定该指令的元素的子元素触发了点击事件，且同时这个子元素被从 DOM 树中删除，指令注册的事件被触发了，显然这是不符合我们的预期的。该项目将 document 上对点击事件的监听注册在了事件的捕获阶段，而不是默认的冒泡阶段，有效的解决了被排除元素内子元素触发点击事件后被删除，错误触发指令注册函数的问题。

## 使用

### 安装

```
npm i v-click-out
```

### 引入


```javascript
import Vue from 'vue'
import clickOutside from 'v-click-out'

Vue.use(clickOutside)

...
```

```vue
<template>
    <p v-click-outside="showSpan">
      被绑定的元素<br>
      点击从 dom 中删除的元素
      <button v-if="isShowSpan" @click="hideSpan">vue-cli documentation</button>.
    </p>
</template>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isShowSpan: true
    }
  },
  methods: {
    showSpan() {
      this.isShowSpan = true;
      console.log('test')
    },
    hideSpan() {
      this.isShowSpan = false;
    }
  }
}
```


