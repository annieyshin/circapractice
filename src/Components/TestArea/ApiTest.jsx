import React  from 'react';
import { Header } from 'semantic-ui-react';
import { useProjects } from '../Common/ApiHooks'

const ApiTest = () => {
  const projects = useProjects();

  return (
    <div>
      <h1>Our call returned:</h1>
      <Header>Some Project Name: {projects && projects[0].name}</Header>
    </div>
  );
};

export default ApiTest;

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