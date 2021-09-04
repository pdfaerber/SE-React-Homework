import Dashboard from "./dashboard";
import { Box1, Box2, Box3 } from "./box";
import { Visitors, VisitorsImg } from "./visitors";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Box1 num="1,281" />
      <Box2 num="4.6" />
      <Box3 num1="960" num2="122" num3="321" />
      <Visitors num="821" />
      <VisitorsImg/>
    </div>
  );
}
export default App;
