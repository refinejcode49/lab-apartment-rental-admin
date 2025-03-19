import { PropertiesList } from "../components/PropertiesList";

export const HomePage = ({data, setData}) => {

  function handleList(list){
    setData(list);
  }
  console.log(data);
  return (
    <>
      <main className="main">
        <PropertiesList list={data} setList={handleList}/>
      </main>
    </>
  );
};
