import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import connect from '../components/lib/connect';

class Clubs extends React.Component {
  loadMore() {
    const { fetch, type, invoices: { paging: { page } } } = this.props;
    fetch({ type, page });
  }

  render() {
    const { clubs: { all, paging } } = this.props;
    if(!paging.hasMore && Number(paging.total) == 0) {
      return (
        <div>
          <h1>Empty</h1>
        </div>
      )
    }

    return (
      <div>
        // <InfiniteScroll loadMore={::this.loadMore} className={b('middleNavList')} hasMore={paging.hasMore && !paging.loading}>
        //   {all.map((invoice) => <NavListItem key={invoice.id} invoice={invoice} selectedId={selectedId} />)}
        // </InfiniteScroll>
        // <div className={b('middleNav', 'indicator')}>
        //   {paging.loading ? <LoadingIndicator /> : null }
        //   {paging.hasMore ? null : <div>全{paging.total}件</div> }
        // </div>        
      </div>
    )
  }
}
