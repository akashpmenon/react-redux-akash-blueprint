const Parent = () => {
  useEffect(() => {
    console.log("Parent useEffect");
  }, []);
  console.log("Parent render");
  return (
    <div>      <Child />    </div>  );
};

const Child = () => {
  useEffect(() => {
    console.log("Child useEffect");
  }, []);
  console.log("Child render");
  return <div></div>;
};