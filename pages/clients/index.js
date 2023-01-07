import Link from "next/link"

const ClientPage = () => {
  const clients = [
    { id: 'profile', name: 'Profile' },
    { id: 'twitter', name: 'Twitter' },
  ];
  return (
    <div>
      <h1>This Client Page</h1>
      <ul>
        {/* <li><Link href='/clients/profile'>Profile</Link></li>
        <li><Link href='/clients/twitter'>Twitter</Link></li> */}
        {/* create dynamic link map */}
        {
          clients.map(client => (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ClientPage