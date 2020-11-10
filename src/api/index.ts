import axios from 'axios';
import {Project} from 'src/data/projects';
import {API_BASE_URL} from '../constants/config';
import {Folder} from 'src/data/folders/types';
import {Asset} from 'src/data/assets/types';
import './config';

export async function getAllProjects(): Promise<Array<Project>> {
  const result = await axios.get<Array<Project>>(`${API_BASE_URL}/projects`);
  return result.data;
}

export async function getFoldersInProject(projectUuid: string): Promise<Array<Folder>> {
  const result = await axios.get<Array<Folder>>(`${API_BASE_URL}/projects/${projectUuid}/folders`);
  return result.data;
}

export async function getAssetsInProject(projectUuid: string): Promise<Array<Asset>> {
  const result = await axios.get<Array<Asset>>(`${API_BASE_URL}/projects/${projectUuid}/assets`);
  return result.data;
}

export async function getSubfolders(folderUuid: string): Promise<Array<Folder>> {
  const result = await axios.get<Array<Folder>>(`${API_BASE_URL}/folders/${folderUuid}/subfolders`);
  return result.data;
}

export async function getAssets(folderUuid: string): Promise<Array<Asset>> {
  const result = await axios.get<Array<Asset>>(`${API_BASE_URL}/folders/${folderUuid}/assets`);
  return result.data;
}

export async function getFolder(folderUuid: string): Promise<Folder> {
  const result = await axios.get<Folder>(`${API_BASE_URL}/folders/${folderUuid}`);
  return result.data;
}