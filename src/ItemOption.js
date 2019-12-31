import React from 'react'

export default function ItemOption(props) {
  const { item, featureTitle, handleUpdate } = props;
  
  return (
    <li>
      <div className='feature__item'
        onClick={() => handleUpdate(featureTitle, item)}>
        {item.name}
        ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(item.cost)})

        </div>
    </li>
  );
}