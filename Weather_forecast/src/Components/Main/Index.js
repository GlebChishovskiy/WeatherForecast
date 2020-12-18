import { Link } from "react-router-dom"


const Main = () => {

    return (
        <div style={{'background-color':'#24CD3D','width':'100%','height':'100vh','text-align':'center'}}>
            <Link to='/search'>
                <div style={{'font-size':'90px'}}>
                    Go
                </div>
            </Link>
        </div>
    )
}

export default Main