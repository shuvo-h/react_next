import ChildCom from "./chindCom";

const TestCompont = (props) => {
  console.log({ props });
  return (
    <div className="abst">
      <h3>My name is {props.name}. parent 2</h3>
      <ChildCom></ChildCom>
    </div>
  );
};
export default TestCompont;
