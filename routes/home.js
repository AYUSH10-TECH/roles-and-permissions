const express = require('express')
const router = express.Router()
const { projects, users, ROLE } = require('../data')
const e = require('express')



router.get('/:projectId/:doId', setProject, (req, res) => {
    
  res.json(req.oi)
})

function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId)
  const doId = parseInt(req.params.doId)
  req.project = users.find(project => project.id === projectId)

  req.hi= users.find(hi => hi.id === doId)
  req.finding=users.find(hi =>hi.id === doId)
  if(req.project.role===ROLE.ADMIN || req.hi.id===req.project.id ||
    (req.project.role===ROLE.MODERATOR && req.finding.role===ROLE.BASIC))
  req.oi=req.hi
  else
  req.oi=null



  
  if (req.oi == null) {
    res.status(404)
    return res.send('Home Page not accessible')
  }
  next()
}

module.exports = router