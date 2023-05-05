---
title: "Expressions 表达式"
---

Expressions 表达式（最早叫 Evaluate Placeholders 表达式）允许开发者在 Storyboard 编排中使用 JavaScript 表达式。

## 示例 {#examples}

```yaml
your-prop-a: "<% _.find(EVENT.detail, item => item.id === QUERY.objectId) %>"
your-prop-b: "<% PIPES.yamlStringify(DATA.cellData) ?? '' %>"
your-prop-c: "<% `/your-app/${QUERY.path}?quality=${QUERY.q}` %>"
transform:
  your-prop-d: "<% DATA.cellData + QUERY.id %>"
```

## 说明 {#explains}

表达式是「以 `<%` + 至少一个空白符开始，并且以至少一个空白符 + `%>` 结束的字符串」，它的内部包裹一个且仅一个 JavaScript 表达式。

例如：

```yaml
properties:
  # ✅ Will Work
  a: "<% `/your-app/${QUERY.path}?quality=${QUERY.q}` %>"

  # 🚫 Not starting with `<% `
  b: "/bad/<% QUERY.path %>"

  # 🚫 Not ending with ` %>`
  c: "<% QUERY.path %>/bad"

  # 🚫 Missing spaces
  d: "<%QUERY.path%>"
```

表达式中可以使用大部分 JavaScript 语法，出于避免意外的错误使用、安全、框架复杂度等方面考虑，支持的语法子集将限制在 [Expression] 中，并剔除了赋值相关的语法或操作，具体的支持清单见本文档最后的附录。

## 内置对象 {#builtin-objects}

表达式中支持的内置对象主要如下：

| 对象              | 说明                                                                                                                                                                                                                                                           |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `QUERY`           | URL query 参数，例如当 URL 为 `?a=1&b=2` 时，`<% QUERY_ARRAY.a %>` 可以得到 `"1"`                                                                                                                                                                              |
| `QUERY_ARRAY`     | URL query 参数，在解析某项参数值时将返回数组。例如当 URL 为 `?a=1&a=2` 时，`<% QUERY_ARRAY.a %>` 可以得到 `["1", "2"]`                                                                                                                                         |
| `HASH`            | URL hash 参数，如 `#your-anchor`                                                                                                                                                                                                                               |
| `ANCHOR`          | URL hash 参数去掉前缀 `#`，如 `your-anchor`                                                                                                                                                                                                                    |
| `APP`             | 微应用的配置（对应 storyboard 的 `app` 字段），例如 `<% APP.homepage %>`                                                                                                                                                                                       |
| `EVENT`           | 事件对象，仅适用于事件配置中                                                                                                                                                                                                                                   |
| `SYS`             | 系统信息，例如当前登录用户名： `SYS.username`, 当前登录用户实例 ID： `SYS.userInstanceId`                                                                                                                                                                      |
| `FLAGS`           | 特性开关信息，key 为开关名，value 为是否启用的 boolean 值                                                                                                                                                                                                      |
| `CTX`             | [Context 上下文]对象。                                                                                                                                                                                                                                         |
| `DATA`            | Transform 使用的原始数据。                                                                                                                                                                                                                                     |
| `PATH`            | URL path 参数。例如对于 path `/object/:objectId` 可以使用 `<% PATH.objectId %>` 引用。                                                                                                                                                                         |
| `PIPES`           | [管道]字典。例如可以使用 `<% PIPES.yamlStringify(whatever) %>` 来引用 `yamlStringify` 管道函数。                                                                                                                                                               |
| `PARAMS`          | [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) 原始对象。                                                                                                                                                                 |
| `I18N`            | 使用 [`I18N(...)`](i18n.md#i18n-in-micro-apps) 显示应用预设的国际化内容。                                                                                                                                                                                      |
| `I18N_TEXT`       | 使用 [`I18N_TEXT(...)`](i18n.md#i18n-at-run-time) 根据当前语言设置转换带有国际化设置的字典为对应文本内容。                                                                                                                                                     |
| `IMG`             | 使用 `IMG.get(...)` 获取图像资源的 URL。                                                                                                                                                                                                                       |
| `PROCESSORS`      | [Custom Processors 自定义加工函数]。                                                                                                                                                                                                                           |
| `PERMISSIONS`     | 使用 `PERMISSIONS.check("your:action-x")` 检查当前登录用户是否拥有指定权限。可以传递多个 actions，当用户拥有所有指定权限时返回 `true`，否则返回 `false`。                                                                                                      |
| `_`               | Lodash 函数库（除标明了 `mutates` 原始数据的函数、`Function` 一节的函数外）。例如 `<% _.flatten(whatever) %>`。                                                                                                                                                |
| `moment`          | Moment 函数库（除了可能做 _mutate_ 操作的函数外，如 `updateLocale()` 等）。例如 `<% moment().format(...) %>`。                                                                                                                                                 |
| `LOCAL_STORAGE`   | localStorage 存储的信息，支持 `getItem` 方法获取 `localStorage` 项，例如 `<% LOCAL_STORAGE.getItem("your-key") %>`。需要写入数据（`localStorage.setItem(...)`）或者移除项（`localStorage.removeItem(...)`），请使用[内建处理器：localStorage.\*]。             |
| `SESSION_STORAGE` | sessionStorage 存储的信息，支持 `getItem` 方法获取 `sessionStorage` 项，例如 `<% SESSION_STORAGE.getItem("your-key") %>`。需要写入数据（`sessionStorage.setItem(...)`）或者移除项（`sessionStorage.removeItem(...)`），请使用[内建处理器：sessionStorage.\*]。 |
| `INSTALLED_APPS`  | 使用 `<% INSTALLED_APPS.has("your-app-id") %>` 来判断指定微应用是否已安装。也可以使用 `<% INSTALLED_APPS.has("your-app-id", ">=1.2.3") %>` 来判断指定微应用已安装并且版本满足指定规则（目前仅支持 `>=` `>` `=` `<` `<=` 这几种比较符，注：属于 semver 子集）   |
| `TAG_URL`         | 使用 JavaScript 的 [Tagged Template] 来实现对 URL 参数的自动编码（会忽略 `/` 的编码）。例如 `` <% TAG_URL`${APP.homepage}/list?q=${q}` %> `` 可以得到 `/hello/world/list?q=a%26b` （假设 `APP.homepage` 为 `/hello/world`、`q` 为 `a&b`）。                    |
| `SAFE_TAG_URL`    | 类似于 `TAG_URL` 但会执行严格编码（会转换 `/` 为 `%2F`）。                                                                                                                                                                                                     |
| `FN`              | 调用 [Storyboard Functions]。                                                                                                                                                                                                                                  |
| `BASE_URL`        | 页面的根目录，现阶段通常为 `"/next"`，未来可能为 `""`，示例配置：`` {action: "window.open", args: [`${BASE_URL}${APP.homepage}/x/y/z`] ``。                                                                                                                    |
| `PATH_NAME`       | URL 路径名，例如当 URL 为 `http://www.uwintech.cn/next/path/name?a=a` 时，`<% PATH_NAME %>` 将转换为 `/path/name` 。                                                                                                                                           |
| `MEDIA`           | [媒体查询全局对象]。                                                                                                                                                                                                                                           |

## 高级 {#advanced}

由于表达式（包括占位符和 Transform）计算得到的数据通常包含来自用户输入的数据，因此为了避免意外解析（例如某数据需要保存原始内容的表达式字符串），表达式得到的数据的内部的其它表达式在消费时不会执行解析。同时也避免了类比于 [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) 的攻击，例如攻击者将某实例描述字段设置为包含恶意表达式的内容。

### 递归标记 {#recursive-flag}

通过添加递归标记 `~` 例如 `<%~ DATA %>`，可以允许该表达式得到的数据的内部的其它表达式（包括占位符和 Transform）在消费时继续执行解析。该标记适用于 Dashboard 等场景：数据库中的数据明确包含需要被解析的表达式。

## 附录 {#references}

支持的 JavaScript 语法清单：

- ✅ ArrayExpression: `[1, 2, 3]`
- ✅ ObjectExpression: `{ a: 1 }`
- ✅ ArrowFunctionExpression: `() => 1`
- ✅ UnaryExpression &lt;Partial&gt;
  - ✅ `-` `+` `!` `typeof` `void`
- ✅ BinaryExpression &lt;Partial&gt;
  - ✅ `==` `!=` `===` `!==`
  - ✅ `<` `<=` `>` `>=`
  - ✅ `+` `-` `*` `/` `%` `**`
  - ✅ `|>` (pipeline operators! [minimal version](https://github.com/tc39/proposal-pipeline-operator/))
- ✅ LogicalExpression: `||` `&&` `??` (nullish coalescing 💅)
- ✅ MemberExpression: `a.b`
- ✅ OptionalMemberExpression: `a?.b` (optional chaining 💅)
- ✅ ConditionalExpression: `a ? 1 : 2`
- ✅ CallExpression: `a(1)`
- ✅ SequenceExpression: `a, b`
- ✅ TemplateLiteral: `` `/your/${path}` ``
  - ✅ Tagged template: `` TAG_URL`${APP.homepage}/list?q=${q}` ``
- ✅ SpreadElement: `[1, ...a]` `{ a, ...rest }`
- ✅ ObjectPattern: `({ a, b }) => null`
- ✅ ArrayPattern: `([ a, b ]) => null`
- ✅ RestElement: `(...args) => null`
- ✅ AssignmentPattern: `(a = 1) => null`
- ✅ NewExpression &lt;Partial&gt;
  - ✅ `new Array(...)`
  - ✅ `new Date(...)`
  - ✅ `new Map(...)`
  - ✅ `new Set(...)`
  - ✅ `new WeakMap(...)`
  - ✅ `new WeakSet(...)`
  - ✅ `new URLSearchParams(...)`

不支持的 JavaScript 语法清单：

- 🚫 Statements: `if (a) {}`
- 🚫 Declarations: `var a`
- 🚫 FunctionExpression: `function a() {}`
- 🚫 UpdateExpression: `++i`
- 🚫 AssignmentExpression: `a = 1`
- 🚫 Class: `class A {}`
- UnaryExpression &lt;Partial&gt;
  - 🚫 `~` `delete`
- BinaryExpression &lt;Partial&gt;
  - 🚫 `<<` `>>` `>>>`
  - 🚫 `|` `^` `&` `in` `instanceof`
- 🚫 Raw strings in tagged templates

浏览器原生 DOM 对象（值）支持清单：

- Object &lt;Partial&gt;
  - ✅ `entries()` `fromEntries()` `keys()` `values()`
  - 🚫 Other Methods`assign()`, etc.
- ✅ Array
- ✅ Boolean
- ✅ Date
- ✅ Infinity
- ✅ JSON
- ✅ Math
- ✅ NaN
- ✅ Number
- ✅ String
- ✅ atob
- ✅ btoa
- ✅ decodeURI
- ✅ decodeURIComponent
- ✅ encodeURI
- ✅ encodeURIComponent
- ✅ isFinite
- ✅ isNaN
- ✅ parseFloat
- ✅ parseInt
- location &lt;Partial&gt;
  - ✅ href (readonly)
  - ✅ origin (readonly)
  - ✅ host (readonly)
  - ✅ hostname (readonly)

## 变更历史 {#history}

| 组件       | 版本  | 变更                                                 |
| ---------- | ----- | ---------------------------------------------------- |
| brick_next | 3.0.0 | 暂时移除对 `ALIAS` 和 `SEGUE` 的支持，待思考替代方案 |

[expression]: https://github.com/estree/estree/blob/master/es5.md#expressions
[custom processors 自定义加工函数]: custom-processors.md
[管道]: pipes.md
[context 上下文]: context.md
[内建处理器：localstorage.\*]: events.md#builtin-actions-localStorage
[内建处理器：sessionstorage.\*]: events.md#builtin-actions-sessionStorage
[storyboard functions]: storyboard-functions.md
[媒体查询全局对象]: media-query.md#media-global-object
[tagged template]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
