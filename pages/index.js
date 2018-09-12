import React from 'react';
import Fonts from 'layouts/Fonts';
import Layout from 'layouts/Layout';

class IndexPage extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    return (
      <Layout>
        <div>Index</div>
      </Layout>
    );
  }
}

export default IndexPage;
