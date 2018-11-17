import './Sheet.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SideTemplate from './SideTemplate';
import { sizeShape } from './shapes';
import { mm } from './utils';

import { 
  selectPosition
} from './selectors';

const Sheet = ({size, children}) => (
  <svg width={mm(size.width)} height={mm(size.height)} fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8">
      <path d="M0,8 l8,-8" style={{stroke: '#ddd', strokeWidth: 1}} />
    </pattern>
    {children}  
  </svg>
) 

Sheet.propTypes = {
  size: PropTypes.shape(sizeShape)
};

const mapStateToProps = ({ templates }) => ({
  size: templates.sheetSize
});

const SheetContainer = connect(mapStateToProps)(Sheet);

const Pages = ({posA, posB, posC}) => (
  <div className="pages">
    <SheetContainer>
      <SideTemplate type="front" {...posA}/>
      <SideTemplate type="back" {...posB}/>
    </SheetContainer>
  
    <SheetContainer>
      <SideTemplate type="left" {...posA}/>
      <SideTemplate type="right" {...posB}/>
    </SheetContainer>
  </div>
);

const mapStateToProps2 = state => ({
  posA: {pos: selectPosition(0.3)(state)},
  posB: {pos: selectPosition(5)(state)}
});

export default connect(mapStateToProps2)(Pages);
