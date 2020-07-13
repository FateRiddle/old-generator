# Getting started

### 安装

```bash
npm i fr-generator
```

### 使用

```js
import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  propsSchema: {
    type: 'object',
    properties: {
      inputName: {
        title: '简单输入框',
        type: 'string',
      },
    },
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const saves = [
  {
    text: '存档1',
    name: 'something',
    schema: {
      title: '对象',
      description: '这是一个对象类型',
      type: 'object',
      properties: {
        inputName: {
          title: '简单输入框',
          type: 'string',
        },
        selectName: {
          title: '单选',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['早', '中', '晚'],
        },
        dateName: {
          title: '时间选择',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => <Generator defaultValue={defaultValue} saves={saves} />;

export default Demo;
```

目前支持两个 props：`defaultValue` 和 `saves`：

- defaultValue 的书写格式可以参考 schema 生成器的输出 schema
- saves 参照上面代码：text 按钮文案，name 对应的字段