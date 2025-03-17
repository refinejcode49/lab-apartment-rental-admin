import { PropertiesList } from "../components/PropertiesList";

export const HomePage = ({data, setData}) => {

  function handleList(list){
    setData(list);
  }
  return (
    <>
      <main className="main">
        <PropertiesList list={data} setList={handleList}/>
      </main>
    </>
  );
};
