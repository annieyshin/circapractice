export const mockExpenses = [
  {
    id: '1',
    title: 'Software',
    cost: 500
  },
  {
    id: '2',
    title: 'Coffee',
    cost: 200
  },
  {
    id: '3',
    title: 'Office Rent and Insurance',
    cost: 1800
  }
];

export const mockProjects = [
  {
    id: 1,
    wid: 1,
    cid: 1,
    name: 'A Project',
    billable: true,
    is_private: true,
    active: true,
    at: '2013-03-06T12:15:37+00:00',
    template: true,
    color: '5',
    budgetType: 'Hourly'
  },
  {
    id: 2,
    wid: 1,
    cid: 2,
    name: 'Some Other Project',
    billable: false,
    is_private: true,
    active: true,
    at: '2013-03-06T12:15:37+00:00',
    template: true,
    color: '5',
    budgetType: 'Hourly'
  },
  {
    id: 3,
    wid: 1,
    cid: 2,
    name: 'Project that is easy!',
    billable: true,
    is_private: true,
    active: true,
    at: '2013-03-06T12:15:37+00:00',
    template: true,
    color: '5',
    budgetType: 'Hourly'
  }
];

export const mockTeamMembers = [
  {
    id: 3123855,
    uid: 35224123,
    wid: 777,
    admin: false,
    active: false,
    email: 'John@toggl.com',
    at: '2013-05-17T16:50:36+03:00',
    name: 'John Swift',
    invite_url:
      'https://toggl.com/user/accept_invitation?code=fb3ad3db5dasd123c2b529e3a519826'
  },
  {
    id: 200066,
    uid: 21961,
    wid: 777,
    admin: true,
    active: true,
    email: 'Jane@toggl.com',
    at: '2012-04-11T22:59:33+03:00',
    name: 'Jane'
  },
  {
    id: 34534534,
    uid: 21961,
    wid: 777,
    admin: true,
    active: true,
    email: 'mike@toggl.com',
    at: '2012-04-11T22:59:33+03:00',
    name: 'Michael Jackson'
  }
];
