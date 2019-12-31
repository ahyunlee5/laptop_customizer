import React from 'react'

export default function ItemOption(props) {
  const { item, selected, featureTitle, handleUpdate } = props;
  
  const selectedClass = item.name === selected[featureTitle].name ? 'feature__selected' : '';
  const featureClass = 'feature__option ' + selectedClass;
  
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