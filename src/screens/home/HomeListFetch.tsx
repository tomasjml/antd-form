import React, { ReactElement, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '@redux/actions';
import { t } from 'src/configs/i18n';
import ListItem from '@components/data_entry/ListItem';

const HomeListFetch = (): ReactElement => {
  const [fetching, setFetching] = useState(true);
  const list = useSelector((state: IReducerStates) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await setFetching(true);

      try {
        await dispatch(fetchList());
      } catch (error) {
        // console.log(error)
      }

      setFetching(false);
    })();
  }, [dispatch]);

  return (
    <>
      {fetching ? (
        <p>{t('loading')}</p>
      ) : (
        list.map((item: IItem) => <ListItem key={item.id} item={item.name} />)
      )}
    </>
  );
};

export default HomeListFetch;
