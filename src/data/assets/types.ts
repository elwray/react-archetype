/**
 * The type to which all asset data will be hydrated
 */
export interface Asset {
  id: string;
  title: string;
  description: string;
  fileName: string;
  accountId: string;
  projectId: string;
}
