import React, { useState } from 'react';
import { Select, Menu } from 'semantic-ui-react';

const ProjectsSelect = ({ projects }) => {
  const getOptions = projects => {
    let options = [];
    projects.forEach(project => {
      let option = {
        key: project.id,
        value: project.name,
        text: project.name
      };
      options.push(option);
    });
    return options;
  };

  const options = getOptions(projects);

  const [selection, setSelection] = useState(null);

  const handleChange = (e, {value}) => {
    setSelection(value);
  };

  console.log(`Current selection is: ${selection}`);

  return (
    <Menu.Item>
      <Select
        onChange={handleChange}
        options={options}
        placeholder="Project"
        value={selection}
      />
    </Menu.Item>
  );
};

export default ProjectsSelect;
