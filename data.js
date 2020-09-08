const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic',
  MODERATOR: 'moderator'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Sneha', role: ROLE.ADMIN },
    { id: 2, name: 'Abhishek', role: ROLE.BASIC },
    { id: 3, name: 'Rahul', role: ROLE.BASIC },
    { id: 4, name: 'Shubham', role: ROLE.MODERATOR }
  ],
  projects: [
    { id: 1, name: "Sneha's shop", userId: 1 },
    { id: 2, name: "Abhishek's shop", userId: 2 },
    { id: 3, name: "Rahul's shop", userId: 3 },
    { id: 4, name: "Shubham's shop", userId: 4}
  ]
}