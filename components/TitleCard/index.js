import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'styles/variables';

const Box = styled.div`
  position: relative;
`;

const BoxLink = styled.a`
  &:hover {
    opacity: 0.8;
  }
`;

const BoxBar = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: ${colors.white};
  width: 100%;
  padding: 10px;
  height: 0.33;
`;

const BoxArt = styled.img`
  width: 100%;
`;

const Icon = styled.img`
  max-width: 40px;
  padding-right: 10px;
`;

const BoxTitle = styled.h3`
  margin: 0;
`;

class TitleCard extends React.PureComponent {
  render() {
    const { icon, image, title, url } = this.props;

    return (
      <Box>
        <BoxLink href={url}>
          <BoxArt src={image} alt={title} />
          <BoxBar>
            <BoxTitle>
              {icon && <Icon src={icon} />}
              {title}
            </BoxTitle>
          </BoxBar>
        </BoxLink>
      </Box>
    );
  }
}

TitleCard.propTypes = {
  icon: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

TitleCard.defaultProps = {
  image: '',
};

export default TitleCard;
