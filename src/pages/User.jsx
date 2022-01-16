import {FaCodepen , FaStore , FaUserFriends , FaUsers} from 'react-icons/fa'
import {useEffect , useContext } from 'react';

import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Spinner from '../components/layout/Spinner';
import GithubContext from '../context/github/GithubContext';
import {getUserAndRepos } from '../context/github/GithubAction'






function User() {
    const {  user , loading  , dispatch} =  useContext(GithubContext)
    const Params = useParams()


    useEffect(()=>{
        dispatch({type:'SET_LOADING'});

        const getUserData = async () => {
            const userData = await getUserAndRepos(Params.login)
            dispatch({type:'GET_USER_AND_REPOS' , payload:userData}) 
      }
      getUserData()
    },[dispatch , Params.login]);
    
    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
      } = user

    if(loading) {
        return <Spinner/>
    }

    return (
        <>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link to='/' className='btn btn-outline  text-white'>
                        Back to Search
                    </Link>
                </div>
                <div className="grid drid-cols-1 xl:grid-cols-3 lg:grid-cols-3 
                md:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8"
                >
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-lg shadow-xl card image-full">
                            <figure>
                                <img src={avatar_url} alt={name} />
                            </figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title mb-0">
                                    {name}
                                </h2>
                                <p>{login}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 text-white">
                        <div className="mb-6">
                            <h1 className="text-3xl card-title text-white">
                                {name}
                                <div className="ml-2 mr-1 badge badge-sucsess">
                                    {type}
                                </div>
                                {hireable && (
                                    <div className="mx-1 badge badge-info">
                                        Hireable
                                    </div>
                                )}
                            </h1>
                            <p>{bio}</p>
                            <div className="mt-4 card-action">
                                <a 
                                href={html_url} 
                                target='_blank' 
                                rel='noreferrer'
                                className='btn btn-outline text-white'
                                >
                                    Visit Github Profile
                                </a>
                            </div>
                        </div>
                        <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                            {location && (
                                <div className="stat bg-current">
                                    <div className="stat-title text-md text-white">
                                        Location
                                    </div>
                                    <div className="text-lg stat-value text-white">
                                        {location}
                                    </div>
                                </div>
                            )}
                              {blog && (
                                <div className="stat bg-current">
                                    <div className="stat-title text-md text-white">
                                        website
                                    </div>
                                    <div className="text-lg stat-value text-white">
                                        <a 
                                        href={`https://${blog}`} 
                                        target="_blank" 
                                        rel='noreferrer'>
                                            {blog}
                                        </a>
                                    </div>
                                </div>
                            )}
                            {twitter_username && (
                                <div className="stat bg-current">
                                    <div className="stat-title text-md text-white">
                                        twitter
                                    </div>
                                    <div className="text-lg stat-value text-white">
                                        <a 
                                        href={`https://twitter.com/${twitter_username}`} 
                                        target="_blank" 
                                        rel='noreferrer'>
                                            {twitter_username}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='w-full py-5 mb-6 rounded-lg 
                shadow-md bg-current-100 stats'
                >
                    <div className="stat bg-current">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5 text-white">
                            Followers
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-5zl text-white">
                            {followers}
                        </div>
                    </div>


                    <div className="stat bg-current">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends  className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5 text-white">
                            Following
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-5zl text-white">
                            {following}
                        </div>
                    </div>

                    <div className="stat bg-current">
                        <div className="stat-figure text-secondary">
                            <FaCodepen  className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5 text-white">
                            Public Repose
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-5zl text-white">
                            {public_repos}
                        </div>
                    </div>

                    <div className="stat bg-current">
                        <div className="stat-figure text-secondary">
                            <FaStore  className='text-3xl md:text-5xl'/>
                        </div>
                        <div className="stat-title pr-5 text-white">
                            Public Gists
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-5zl text-white">
                            {public_gists}
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default User
