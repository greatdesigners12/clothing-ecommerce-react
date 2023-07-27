import CategoryList from "../components/list/category-list/category-list.components"; 
import { Outlet } from "react-router-dom";

const Home = () => {
    
      
      return (
        <div>
          <CategoryList />
          <Outlet />
        </div>
        
      );
}

export default Home