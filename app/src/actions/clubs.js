import { createAction } from 'redux-actions';
import club from '../gateway/club';

export default {
  fetch: createAction('clubs.fetch', club.index, () => ({
  	before: 'club-paging.start'
  }))
}
