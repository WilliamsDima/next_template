import { FC } from 'react'
import Page from '../src/components/templates/Page'
import UsersTemplate from '../src/components/templates/Users'

type User = {
  id: number,
  name: string
}

interface IUsers {
  data: User[]
}

const Users: FC<IUsers> = ({data}) => {

  return (
    <Page>
      <UsersTemplate data={data}/>
    </Page>
  )
}

export default Users

export async function getStaticProps(context: any) {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  
  return {
    props: {data}, // will be passed to the page component as props
  }
}