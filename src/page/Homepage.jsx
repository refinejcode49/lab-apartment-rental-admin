import { PropertiesList } from "../components/PropertiesList";

export const HomePage = ({data, setData}) => {
  // console.log("HomePage => ", data);
  return (
    <>
      <main className="main">
        <PropertiesList list={data} setList={setData}/>
      </main>
    </>
  );
};
