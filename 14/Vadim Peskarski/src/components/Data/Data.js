import useFetch from '../../Hooks/useFetch.hook';
import useStorage from '../../Hooks/useStorage.hook';
import useScript from '../../Hooks/useScript.hook';

const Data = ({ url }) => {
  const data = useFetch(url);
  const store = useStorage();
  const script = useScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js');
  console.log(script);

  store.item1 = 'test1';
  store.item2 = 'test2';
  const { item1, item2 } = store;

  return (
    <>
      {script}
      <h2>{item1}</h2>
      <h4>{item2}</h4>
      <ul>
        {data && data.map(element => {
          return (
            <li key={element.id}>{element.title}</li>
          )
        })}
      </ul>
    </>
  )
}

export default Data;
