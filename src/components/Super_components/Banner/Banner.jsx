import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Banner = () => {
  return (
    <div className="products">
      <div className="flex flex-col flex-wrap justify-center gap-20 items-center xl:flex-row xl:justify-between">
        <div className="bunner">
          <div>
            <span>Banner subfocus</span>
            <h2>Space for Heading</h2>
          </div>
          <button className="btn-mt btn-sm arrow">
            Read recepies <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="bunner">
          <div>
            <span>Banner subfocus</span>
            <h2>Space for Heading</h2>
          </div>
          <button className="btn-mt btn-sm arrow">
            Read recepies <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;