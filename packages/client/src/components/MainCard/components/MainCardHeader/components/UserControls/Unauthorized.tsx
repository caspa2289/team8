import { FC } from 'react'
import { Button } from '@mui/material'

const Unauthorized: FC = () => {
  return (
    <Button color="secondary" variant="contained" sx={{ color: 'white' }}>
      Авторизоваться
    </Button>
  )
}

export default Unauthorized
