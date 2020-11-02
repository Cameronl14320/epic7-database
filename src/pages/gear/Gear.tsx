import React from 'react';

import '../../Body.css'
import '../../components/shared/Header/Header';
import { css } from '@emotion/core';


// https://www.w3schools.com/TAGS/default.ASP for Tags

const Gear = () => {
  return (
    <div>
      <header className="sub-header">
        <ul className="sub-ul">
          <li className="sub-li">Hello</li>
          <li className="sub-li">Bye</li>
        </ul>
      </header>

      <div className="Background">
        <div css={css`
            text-align: center;
            background-color: black;
            width: auto;
            color: white;
        `}>
          <div className="gear-body">
            <ul>
              <li>Test 1</li>
              <li>Test 2</li>
            </ul>

            <ul>
              <li>Hello 1</li>
              <li>Hello 2</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Gear;
