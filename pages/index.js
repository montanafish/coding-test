import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import GridList from 'components/GridList';
import TitleCard from 'components/TitleCard';
import Fonts from 'layouts/Fonts';
import Layout from 'layouts/Layout';
import { getShowTitles } from 'api';

class IndexPage extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    const { showTitles } = this.props;
    return (
      <Layout>
        <GridList>
          {map(showTitles, showTitle => (
            <TitleCard
              key={showTitle.id}
              title={showTitle.title}
              image={showTitle.image.medium}
              icon={showTitle.icon}
            />
          ))}
        </GridList>
      </Layout>
    );
  }
}

IndexPage.getInitialProps = async () => {
  const showTitles = await getShowTitles(1);
  return { showTitles };
};

IndexPage.propTypes = {
  showTitles: PropTypes.arrayOf(PropTypes.object),
};

export default IndexPage;
