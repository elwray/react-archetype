import React, {FC} from 'react';
import styles from './Folders.module.css';
import {List, Table} from 'semantic-ui-react'
import {Folder} from 'src/data/folders/types';
import {FolderItem} from './components/FolderItem';
import {Asset} from 'src/data/assets/types';
import {AssetItem} from './components/AssetItem';
import {ParentFolderItem} from './components/ParentFolderItem';

interface Props {
  folders: Folder[];
  assets: Asset[];
  onFolderSelect(folderUuid: string): void;
  onParentFolderSelect(): void;
}

export const Folders: FC<Props> = ({folders, assets, onFolderSelect, onParentFolderSelect}) => (
  <div className={styles.container}>

    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>Folders</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <List divided relaxed>
              <ParentFolderItem onClick={onParentFolderSelect} />

              {folders.map(({id, name}) => (
                <FolderItem folderId={id} name={name} key={id} onFolderSelect={onFolderSelect} />
              ))}

              {assets.map(x => (
                <AssetItem key={x.id} title={x.title} description={x.description} fileName={x.fileName}/>
              ))}
            </List>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

  </div>
);