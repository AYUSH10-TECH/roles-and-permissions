const express = require('express')
const router = express.Router()
const { projects, users, ROLE } = require('../data')
const e = require('express')

function setProject(req, res, next) {
    const projectId = parseInt(req.params.projectId)
    req.project = users.find(project => project.id === projectId)

     req.comm=users
     req.modcomm=users.filter(checking)
     req.usercomm=users.filter(basicChecking)
     if(req.project.role!=null)
     {
       if(req.project.role === ROLE.ADMIN)
     req.oi=req.comm
       else if( req.project.role === ROLE.MODERATOR)
       req.oi=req.modcomm
       else
       req.oi=req.usercomm
     }
     else
     req.oi=null


    if (req.project == null) {
      res.status(404)
      return res.send('Community Page not accessible')
    }
    next()
  }
function checking(user)
{
    return (user.role===ROLE.BASIC || user.role===ROLE.MODERATOR)
}
function basicChecking(user)
{
  return user.role===ROLE.BASIC
}


router.get('/:projectId', setProject, (req, res) => {
    
    res.json(req.oi)
  })

module.exports = router