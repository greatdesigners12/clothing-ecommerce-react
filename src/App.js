import Home from "./routes/home.component";
import {Route, Routes} from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.component";
import Navigation from "./routes/Navigation/navigation.component";
import Shop from "./components/shop/shop.component";
import CartList from "./components/list/cart-list/cart-list.component";


const App = () => {  
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />}/>
          <Route path="sign-in" element={<SignIn />}/>
          <Route path="carts" element={<CartList />}/>
          
      </Route>
        
      
    </Routes>
    
  );
}

export default App;
