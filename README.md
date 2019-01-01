<h1 align="center">
    Vue List Rendered
    <br>
    <a href="https://www.npmjs.com/package/vue-list-rendered"><img src="https://img.shields.io/npm/v/vue-list-rendered.svg?style=for-the-badge" alt="npm" /></a> <a href="https://www.npmjs.com/package/vue-list-rendered"><img src="https://img.shields.io/npm/dt/vue-list-rendered.svg?style=for-the-badge" alt="npm" /></a>
</h1>

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
    + to debug the results add `:debug` argument ex.`v-list-rendered:debug="..."` then check your console.
    <br>

    ```html
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
                    blogList: [...]
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
