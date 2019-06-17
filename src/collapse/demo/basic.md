---
order: 0
title: 基础用法
description:
---

```js
import React from 'react';
import {Collapse} from '@jdcfe/yep-react';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '三体',
      cont:
        '《三体》是刘慈欣创作的系列长篇科幻小说，由《三体》、《三体Ⅱ·黑暗森林》、《三体Ⅲ·死神永生》组成，第一部于2006年5月起在《科幻世界》杂志上连载，第二部于2008年5月首次出版，第三部则于2010年11月出版。',
      itemList: [
        {
          title: '刘慈欣',
          cont:
            '刘慈欣，1963年6月出生，1985年10月参加工作，山西阳泉人，本科学历，高级工程师，科幻作家，中国作家协会会员、第九届全委会委员， [1]  中国科普作家协会会员，山西省作家协会副主席 [2-3]  ，阳泉市作家协会副主席，中国科幻小说代表作家之一。',
        },
        {
          title: '东野圭吾',
          cont:
            '东野圭吾，1958年2月4日出生于日本大阪。毕业于大阪府立大学电气工学专业，之后在汽车零件供应商日本电装担任生产技术工程师，并进行推理小说的创作。1985年，凭借《放学后》获得第31回江户川乱步奖，从此成为职业作家，开始专职写作。',
        },
        {
          title: '蔡康永',
          cont:
            '蔡康永，1962年3月1日出生于台湾省台北市，台湾东海大学外文系本科，美国加州大学洛杉矶分校硕士，中国台湾节目主持人、作家、设计师、演员、编剧、导演。1990年开始参加电影制片及编剧、影评的工作。',
        },
      ],
    };
  }

  render() {
    const {cont, title, itemList} = this.state;
    return (
      <div className="collapse">
        <h4 className={'collapse-type'}>默认不展开：</h4>
        <Collapse title={title}>{cont}</Collapse>
        <h4 className={'collapse-type'}>展开：</h4>
        <Collapse title={title} isOpen={true}>
          {cont}
        </Collapse>
        <h4 className={'collapse-type'}>列表：</h4>
        {itemList && itemList.map(item => <Collapse title={item.title}>{item.cont}</Collapse>)}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```