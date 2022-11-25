import { AppBar, Toolbar, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import UserControls from './components/UserControls'
import UserMenu from './components/UserMenu'
import { PageContext } from '../../../../utils/PageContext'

const MainCardHeader: FC = () => {
  const { pageInfo } = useContext(PageContext)

  const { name } = pageInfo ?? {}

  return (
    <AppBar position="static">
      <Toolbar>
        <UserMenu />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {name}
        </Typography>
        <UserControls />
      </Toolbar>
    </AppBar>
  )
}

export default MainCardHeader
