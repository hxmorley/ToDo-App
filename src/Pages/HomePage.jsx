import {Link} from 'react-router-dom'
import '../App.css'

const HomePage = () => {
  return (
    <div>
      <div className='text'>
        <h1>TO DO LIST<br/>CREATOR</h1>
        <p>This application is used for creating a to do list.</p>
        <p>use the add task page to create indivual tasks.</p>
        <p>The display tasks page is to view all tasks.</p>
        <button><Link to="/AddTaskPage">Add A Task</Link></button>
        <button><Link to="/DisplayTasksPage">Display Tasks</Link></button>
      </div>
      <img  className="HomeImg" src="https://cdn.mos.cms.futurecdn.net/JbrLe2So3PGdCkeju4GYcc.jpg"  width="500px" height="390px" alt="List Image"></img>
    </div>
  )
}

export default HomePage;