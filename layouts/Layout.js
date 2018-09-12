import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: add header when available
const Header = styled.div``;

// TODO: add footer when available
const Footer = styled.div``;

const Container = styled.div`
  width: 100%;
`;

const Main = styled.div`
  padding: 60px;
`;

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Container>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
