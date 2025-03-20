import { PropertiesList } from "../components/PropertiesList";

export const HomePage = ({ data, setData, isOpen, setIsOpen }) => {
  // console.log("HomePage => ", data);
  return (
    <>
      <main className="main">
        <PropertiesList
          list={data}
          setList={setData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </main>
    </>
  );
};
