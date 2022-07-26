
import DashboardJobs from './DashboardJobs';
import DashboardFav from './DashboardFav'
import PostJobs from './PostJobs'


const Dashboard = () => {
  return (
    <div className="dashboard">
        <PostJobs/>
        <DashboardJobs/>
        <div className="basic_posts">
        <DashboardFav/>
        </div>
    </div>
  )
}

export default Dashboard