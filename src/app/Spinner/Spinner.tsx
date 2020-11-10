import React, {FC} from 'react';
import {Loader} from 'semantic-ui-react';

interface Props {
  loading: boolean;
}

export const Spinner: FC<Props> = ({loading, children}) => {
  return (
    <div>
      <Loader active={loading} />
      {children}
    </div>
  );
};