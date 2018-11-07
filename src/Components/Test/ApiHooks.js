import { useState, useEffect } from 'react';
import { init } from './token';

export const useWorkspace = () => {
    const getWorkspacesUrl = `https://www.toggl.com/api/v8/workspaces`;
    const [workspaceId, setWorkspaceId] = useState(null);
    const [workspaceName, setWorkspaceName] = useState(null);
  
    useEffect(() => {
      fetch(getWorkspacesUrl, init)
        .then(response => response.json())
        .then(data => {
          setWorkspaceId(data[0].id);
          setWorkspaceName(data[0].name);
          console.log(data);
        });
    }, []);
  
    return {
      id: workspaceId,
      name: workspaceName
    }
  }