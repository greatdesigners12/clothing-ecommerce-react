import {Outlet, Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import "./navigation.styles.jsx"
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutFunc } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer, NavLink,NavLinksContainer, LogoContainer } from "./navigation.styles.jsx";



const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isActive} = useContext(CartContext)
    const signOut = async (event) =>  {
       await signOutFunc()
        
    }

    
    return (
      <div>
        <NavigationContainer>
            
            <LogoContainer className="logo-container" to="/">
                <Logo className="logo" />
            </LogoContainer>
           
            <NavLinksContainer>
                
                {currentUser ? (
                    /* as=h2, berarti dirender jadi element h2 */ 
                    <NavLink as="h2" onClick={signOut} className="nav-link">logout</NavLink>
                    
                ) : (<NavLink to="/sign-in" className="nav-link">
                        <h2>Sign In</h2>
                    </NavLink>)}
                    <NavLink to="/shop" className="nav-link">
                        <h2>Shop</h2>
                    </NavLink>
                    
                    <CartIcon  />
                
            </NavLinksContainer>
            {
                isActive && (<CartDropdown />)
            }
            
          
        </NavigationContainer>
        
        <Outlet />
      </div>
    )
}

export default Navigation