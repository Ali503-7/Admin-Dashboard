import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const Catigores = () => {
  return (
    <div className='catigores'>
      <ul>
        <li>Bakery 
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>Fruit and vegetables 
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>Meat and fish 
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>Drinks 
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>Kitchen 
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>Special nutrition 
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>Baby 
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>Pharmacy 
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
      </ul>
    </div>
  );
}
