import Link from "next/link"
import { FC } from "react"
import styles from './style.module.scss'

type User = {
  id: number,
  name: string
}

interface IUsers {
  data: User[]
}

const UserList: FC<IUsers> = ({data}) => {

  return (
    <ul className={styles.list}>
        {data?.map((item) => {
          return <li key={item.id}>
            <Link href={`/users/${item.id}`}>
              {item.name}
            </Link>
            
            </li>
        })}
    </ul>
  )
}

export default UserList
