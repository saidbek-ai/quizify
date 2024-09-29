import { Provider } from "react-redux";
import store from "./store";
import Quiz from "./features/Quiz";

function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}

export default App;
