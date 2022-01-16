import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"


function Home() {
    return (
        <div className="color">
            {/* search users */}

            <UserSearch/>  
            <UserResults/>
           
        </div>
    )
}

export default Home
