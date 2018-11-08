import { useState, useEffect } from 'react';
import { init } from './token';

export const useProjects = () => {
  const workspaceUrl = `https://www.toggl.com/api/v8/workspaces`;
  const getProjectUrl = (workspaceId) => `https://www.toggl.com/api/v8/workspaces/${workspaceId}/projects`;
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch(workspaceUrl, init)
      .then(response => response.json())
      .then(data => {
        let workspaceId = data[0].id;
        return fetch(getProjectUrl(workspaceId), init)
          .then(response => response.json())
          .then(data => {

            //-------LOG-----------//
            console.log(data);
          
            setProjects(data);
          });
      });
  }, []);
  return projects;
};
