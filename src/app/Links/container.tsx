import React, { useEffect, useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import {selectLinksList, fetchLinks} from '../../data/links';
import { Links } from './Links';

export const LinksContainer = () => {
  const dispatch = useDispatch();

  const { links } = useMappedState(useCallback(state => ({
    links: selectLinksList(state),
  }), []));

  useEffect(() => {
    dispatch(fetchLinks());
  }, [dispatch]);

  return <Links links={links} />;
};
