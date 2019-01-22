import React from 'react';

let items = [];

const List = () => {
  if (items.length) {
    const ItemList = items.map(item => (
      <li key={item.id}>
        <a href={item.url}>{item.title}</a>
      </li>
    ));
    return ItemList;
  }

  throw (async () => {
    try {
      const res = await fetch(
        'https://qiita.com/api/v2/items?page=1&per_page=20',
        {
          mode: 'cors'
        }
      );
      const json = await res.json();
      console.log(json);
      items = json;
    } catch (err) {
      console.log(err);
    }
  })();
};

export default List;
