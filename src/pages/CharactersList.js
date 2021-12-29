import React,{useState} from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
query {
    getAllUsers {
      id
      name
      description
      sourceLink
      documentationLink
      notes
      project
      developer
    }
  }
`

export default function CharactersList() {

    const [names,setNames] = useState([])
    const { error, data, loading } = useQuery(GET_CHARACTERS)

    console.log({ error, data, loading })

    if (loading) return <div>spinner...</div>

    if (error) return <div>something went wrong...</div>

    return (
        <>
            <div className="header-main">
                <input type="text" className='myInput' onChange={(e) => setNames(e.target.value)} placeholder='Search project ..' title="Type in a name" />
                <table className="tb">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Source Link</th>
                            <th>Documentation Link</th>
                            <th>Notes</th>
                            <th>Project</th>
                            <th>Developer</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.getAllUsers.filter((getAllUsers) => {
                            if (names == "") {
                                return getAllUsers
                            } else if (getAllUsers.name.toLowerCase().includes(names.toLowerCase())) {
                                return getAllUsers
                            }
                        }).map((getAllUsers) => (
                            <tr>
                                <td key={getAllUsers.id}>{getAllUsers.name}</td>
                                <td>{getAllUsers.description}</td>
                                <td>{getAllUsers.sourceLink}</td>
                                <td><a href={getAllUsers.documentationLink} target="_blank">{getAllUsers.documentationLink}</a></td>
                                <td>{getAllUsers.notes}</td>
                                <td>{getAllUsers.project}</td>
                                <td>{getAllUsers.developer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
