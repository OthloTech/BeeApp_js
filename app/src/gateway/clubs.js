import { get, post, put } from 'gateway/beeapp';

export default {
  index: get('clubs')
  //new: get('clubs/new'),
  //edit: (id) => get(`clubs/${id}/edit`),
  //create: post('clubs'),
  //update: (id) => put(`clubs/${id}`)
}
