# Refactory - UI Kit

## Usage

Put this into `package.json` file.

```json
{
  "devDependencies": {
    "@refactory.id/uikit": "github:refactory-id/uikit#develop"
  }
}
```

On Vue.js main file (usually `src/main.js`)

```js
import Vue from 'vue'
import UiKits from '@refactory.id/uikit'
Vue.use(UiKits)
```

Ready to use

```vue
<template>
  <div>
    <RfTextInput v-model="message"/>
    <RfButton type="primary" size="lg">
      <i class="fas fa-paper-plane"></i> Send
    </RfButton>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello World!'
      }
    }
  }
</script>
```
