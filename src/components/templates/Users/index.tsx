import React, { FC } from "react"
import UserList from "../../organisms/UserList"
import styles from './style.module.scss'

type User = {
  id: number,
  name: string
}

interface IPage {
  data: User[]
}

const UsersTemplate: FC<IPage> = ({data}) => {


  return (
    <div className={styles.container}>
      <div>
        Пользователи:
      </div>

      <UserList data={data}/>
    </div>
  )
}

export default UsersTemplate