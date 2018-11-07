import React  from 'react';
import { Header } from 'semantic-ui-react';
import { useWorkspace } from './ApiHooks'

const ApiTest = () => {
  const workspace = useWorkspace();

  return (
    <div>
      <Header>{workspace.name}</Header>
      <Header>ID: {workspace.id}</Header>
    </div>
  );
};

export default ApiTest;

// -------------------------------------------------------------------------
// Custom Hook reusable in other components (this is what we are importing)
// -------------------------------------------------------------------------
//
// const useWorkspace = () => {
//   const getWorkspacesUrl = `https://www.toggl.com/api/v8/workspaces`;
//   const [workspaceId, setWorkspaceId] = useState(null);
//   const [workspaceName, setWorkspaceName] = useState(null);

//   useEffect(() => {
//     fetch(getWorkspacesUrl, init)
//       .then(response => response.json())
//       .then(data => {
//         setWorkspaceId(data[0].id);
//         setWorkspaceName(data[0].name);
//         console.log(data);
//       });
//   }, []);

//   return {
//     id: workspaceId,
//     name: workspaceName
//   }
// }

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