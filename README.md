# Vue List Rendered

[![npm](https://img.shields.io/npm/v/vue-list-rendered.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-list-rendered) [![npm](https://img.shields.io/npm/dt/vue-list-rendered.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-list-rendered)

> to avoid performance drop we hook only into the [bind function](https://vuejs.org/v2/guide/custom-directive.html#Hook-Functions) which is called only once,<br>
> also to make sure the directive doesnt add any extra load we check by index & at the end we send the last item value.

## Installation

```bash
npm install vue-list-rendered --save
```

## Usage

- register the directive

    ```js
    window.Vue = require('vue')
    require('vue-list-rendered')

    new Vue({
        el: '#app',
    })
    ```

- add `v-list-rendered="[index, list, callback]"` to your `v-for` element

    ```vue
    <template>
        <ul>
            <li v-for="(blog, index) in blogList" :key="blog"
                v-list-rendered="[index, blogList, doSomething]">
                ...
            </li>
        </ul>
    </template>

    <script>
        export default {
            data() {
                return {
                    // ...
                }
            },
            methods: {
                doSomething(lastItem) {
                    console.log(lastItem)
                }
            }
        }
    </script>
    ```
