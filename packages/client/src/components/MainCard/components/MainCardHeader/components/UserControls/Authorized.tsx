import { Avatar, IconButton, Typography } from '@mui/material'
import { FC } from 'react'
import { IUser } from '../../../../../../types/pageContext'

interface IAuthorizedProps {
  userInfo: IUser
}

const Authorized: FC<IAuthorizedProps> = ({ userInfo }) => {
  const { name } = userInfo

  return (
    <>
      <Typography component="div" sx={{ mr: 1 }} color="inherit">
        {name}
      </Typography>
      <IconButton sx={{ p: 0 }}>
        <Avatar alt="Your profile picture" src="/" />
      </IconButton>
    </>
  )
}

export default Authorized
