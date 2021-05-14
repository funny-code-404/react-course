import DataContext from '../context/DataContext';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { List, Item, LoadingMessage } from './style';

const CatsList = () => {
  const { dataCat } = useContext(DataContext);
  const [imgInfo, setImgInfo] = useState(false);
  const history = useHistory();

  useEffect(() => {
    (typeof dataCat !== "undefined") ? setImgInfo(true) : setImgInfo(false);
  }, [dataCat]);

  const handleClick = (e) => {
    if ((e.target.tagName).toLowerCase() === 'li') {
      history.push(`/${e.target.id}`);
    }
  };

  return (
    <>
      {!imgInfo && <LoadingMessage>Loading...</LoadingMessage>}
      <List onClick={handleClick}>
        {imgInfo && dataCat.map((item) => <Item key={item.id} id={item.id}>{item.name}</Item>)}
      </List>
    </>
  );
}

export default CatsList;