---
title: "Control Nodes"
---

老模板（NT 包）在 Brick Next V3 下将放弃支持（因为它是一个编排黑箱，NT 的存在使得 V3 对加载性能的优化无法进行），因此需要替代的方案。

在老模板中，我们更多做了一些根据指定参数按一定逻辑控制（例如循环遍历和条件判断等）组装成一段编排，其中一些能力可以利用 `CTX/STATE` 结合当前的 `if` 设置实现，但仍有一些场景无法覆盖。

因此我们在 Storyboard 编排中提供了一些特殊的控制节点，例如循环遍历：

```yaml
brick: ":forEach"
dataSource: "<% CTX.dataList %>"
slots:
  # 保留插槽结构，以便兼容现有 Visual Builder 构件树的展示风格。
  # 同时以支持 if/else 和 switch 以及未来可能的其他控制节点的扩展。
  "":
    bricks:
      - brick: my-brick
        properties:
          label: "<% ITEM.label %>"
          value: "<% ITEM.value %>"
```

条件判断：

```yaml
brick: ":if"
dataSource: "<% CTX.hasPermission %>"
slots:
  "":
    bricks:
      - brick: a
      - brick: b
  "else":
    bricks:
      - brick: c
      - brick: d
```

条件选择：

```yaml
brick: ":switch"
dataSource: |
  <%
    CTX.score >= 90
      ? "a"
      : CTX.score >= 60
      ? "b"
      : "c"
  %>
slots:
  "a": ...
  "b": ...
  "c": ...
```

:::note
控制节点可以使用在普通页面编排、自定义模板和 `useBrick` 中。
:::

## 追踪变更 {#track}

使用 [Context] 或 [State] 时，控制节点的数据源 `dataSource` 也可以激活自动追踪变更并重新渲染。

```yaml {2}
brick: ":forEach"
dataSource: "<% 'track context', CTX.dataList %>"
slots: ...
```

## 变更历史 {#history}

| 组件       | 版本  | 变更             |
| ---------- | ----- | ---------------- |
| brick_next | 3.0.0 | 新增控制节点能力 |

[context]: context.md
[state]: template-state.md
