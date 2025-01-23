import "../RecentPostsFunctionality/style.scss"
import useSWR from "swr"


async function fetcher(url) {
    const response = await fetch(url)
    if (!response.ok) throw new Error("Product not found")
    return response.json()
}


const RecentPostsFunctionality = () => {

    const { data, error, isLoading } = useSWR(
        `https://672b2ff4976a834dd025f8f2.mockapi.io/api/furniture/blogs`,
        fetcher
    )
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    return (
        <div className="recent-post-main">
            <div className="recent-post-include">
                <h2 className="recent-post-text">Recent Post</h2>
                {data.map((e, index) => (
                    <div className="recent-post-info" key={index}>
                        <img className="recent-post-info-img" src={e.img} />
                        <div className="recent-post-info-right">
                            <p className="recent-post-info-right-text">{e.text}</p>
                            <p className="recent-post-info-right-calender">{e.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default RecentPostsFunctionality
