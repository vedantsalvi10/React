import { In } from "./components/In.jsx"
import { Profile } from "./components/profile.jsx"
import UserContextProvider from "./context/UserContextProvider.jsx"
function App() {


  return (
    <UserContextProvider>
      <h2>chai aur code</h2>
      <In />
      <Profile />
    </UserContextProvider>
  )
}

export default App
