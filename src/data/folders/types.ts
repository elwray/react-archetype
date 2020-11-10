export interface Folder {
  id: string;
  name: string;
  parentId: string;
  projectId: string;
  folderCount: number;
  assetsCount: number;
  size: number;
}