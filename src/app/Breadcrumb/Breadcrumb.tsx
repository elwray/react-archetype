import React, {FC} from 'react';
import {Breadcrumb} from 'semantic-ui-react';

// interface BreadcrumbItem {
//   name: string;
//   link: string;
// }
//
// interface Props {
//   items: BreadcrumbItem[];
// }

export const BreadcrumbElement: FC = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Projects</Breadcrumb.Section>
    {/*<Breadcrumb.Divider>/</Breadcrumb.Divider>*/}
    {/*<Breadcrumb.Section link>Registration</Breadcrumb.Section>*/}
    {/*<Breadcrumb.Divider>/</Breadcrumb.Divider>*/}
    {/*<Breadcrumb.Section active>Personal Information</Breadcrumb.Section>*/}
  </Breadcrumb>
);