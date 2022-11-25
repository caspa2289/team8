import { FC, useContext } from 'react'
import { PageContext } from '../../../../../../utils/PageContext'
import { isEmpty } from 'lodash'
import Unauthorized from './Unauthorized'
import Authorized from './Authorized'

const UserControls: FC = () => {
  const { userInfo } = useContext(PageContext)

  return (
    <>
      {isEmpty(userInfo) ? (
        <Unauthorized />
      ) : (
        <Authorized userInfo={userInfo} />
      )}
    </>
  )
}

export default UserControls
