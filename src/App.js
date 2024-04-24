
import DynamicForm from "./components/DynamicForm/DynamicForm";
import Introduction from "./components/Introduction/Introduction";
import NavbarMenu from "./components/NavbarMenu";
import Services from "./components/Services/Services";

function App() {
  return (
    <div >
      <NavbarMenu/>
      <Introduction/>
      <Services/>
      <DynamicForm/>
    </div>
  );
}

export default App;
