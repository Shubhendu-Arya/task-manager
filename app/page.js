function Greeting(props){
  return <h1>Hello {props.name} </h1>;
}
export default function Home(){
  return(
    <div>
      <Greeting name="shubh" />
      <Greeting name="rahul" />
      <Greeting name="aryan" />
    </div>
  );
}