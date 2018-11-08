import { useState, useEffect } from 'react';
import { init } from './token';

export const useData = () => {
  const workspaceUrl = `https://www.toggl.com/api/v8/workspaces`;

  const getProjectUrl = workspaceId =>
    `https://www.toggl.com/api/v8/workspaces/${workspaceId}/projects`;

  const [projects, setProjects] = useState(null);

  const getClientsUrl = workspaceId =>
    `https://www.toggl.com/api/v8/workspaces/${workspaceId}/clients`;

  const [clients, setClients] = useState(null);

  const getUsersUrl = workspaceId =>
    `https://www.toggl.com/api/v8/workspaces/${workspaceId}/users`;

  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch(workspaceUrl, init)
      .then(response => response.json())
      .then(data => {
        let workspaceId = data[0].id;
        return fetch(getProjectUrl(workspaceId), init)
          .then(response => response.json())
          .then(data => {
            setProjects(data);
            return fetch(getClientsUrl(workspaceId), init)
              .then(response => response.json())
              .then(data => {
                setClients(data);
                return fetch(getUsersUrl(workspaceId), init)
                  .then(response=>response.json())
                  .then(data => {
                    setUsers(data);
                  });
              });
          });
      });
  }, []);
  return {
    projects: projects,
    clients: clients,
    users: users
  };
};


// --------------------------------------------
// Custom Hook Example for reusable form input
// --------------------------------------------
//
// const useFormInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = e => setValue(e.target.value);

//   return {
//     value,
//     onChange: handleChange
//   }
// }
