import React from 'react';

export default function Header(props) {
  return (
    <aside className="block col-1 zoo">
      <div>
        <a href="#/cart" className='ho'>
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </aside>
  );
}
