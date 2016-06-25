import EditForm from 'components/club/EditForm';
import NewForm from 'components/clubs/NewForm';
import Index from 'components/clubs/Index';

module.exports = {
  path: 'clubs',
  component: Index,
  as: 'clubs',
  indexRoute: { compoennt: Index},
  childRoutes: [
    { path: 'new', component: NewForm, as: 'clubs_new' },
    { path: '/:id/edit', component: EditForm, as: 'clubs_edit' }
  ]
}
