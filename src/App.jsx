import "./App.css";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/iceCream/IcecreamView";
import UsersView from "./features/user/UsersView";

function App() {
  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UsersView />

      {/* <UserView /> */}
    </div>
  );
}

export default App;
