import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styles/media';
import { sizes } from 'styles/variables';

const Grid = styled.div`
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  justify-content: flex-start;
  flex-wrap: wrap;
  webkitoverflowscrolling: 'touch';

  ${media.tablet`
    justify-content: center;
  `} 
  
  > div {
    flex: 1 1 auto;
    margin: ${props => `${props.spacing}px`};
    max-width: ${props => `${props.itemWidth}px`};
    
    ${media.mobile`
      max-width: ${sizes.width.mobile}px;
    `};
  }
`;

class GridList extends React.PureComponent {
  render() {
    const { children, vertical, spacing, itemWidth } = this.props;

    return (
      <Grid vertical={vertical} spacing={spacing} itemWidth={itemWidth}>
        {React.Children.map(children, (child, i) => (
          <div key={i}>{child}</div>
        ))}
      </Grid>
    );
  }
}

GridList.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
  spacing: PropTypes.number,
  itemWidth: PropTypes.number,
};

GridList.defaultProps = {
  spacing: 5,
  itemWidth: 315,
};

export default GridList;
