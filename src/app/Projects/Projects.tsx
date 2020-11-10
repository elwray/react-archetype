import React, {FC} from 'react';
import styles from './Projects.module.css';
import {List, Table} from 'semantic-ui-react';
import {Project} from 'src/data/projects';
import {ProjectItem} from './components/ProjectItem';

interface Props {
  projects: Project[];
  onProjectSelect?(projectUuid: string): void;
}

export const Projects: FC<Props> = ({projects, onProjectSelect}) => {
  return (
    <div className={styles.container}>

      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>Projects</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <List divided relaxed>
                {projects.map(({id, name, description}) => (
                  <ProjectItem id={id} name={name} description={description} key={id}
                               onProjectSelect={onProjectSelect}/>
                ))}
              </List>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

    </div>
  );
};
