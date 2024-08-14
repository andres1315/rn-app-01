import { useEffect, useState } from 'react'

export const useRepositories = () => {
  const [repositories, setRepositories] = useState(null)
  const fetchRepositories = async () => {
    await fetch('http://192.168.1.6:5000/api/repositories/')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message)
        // ADD THIS THROW error
        throw error
      })
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return { repositories: repositoriesNodes }
}
