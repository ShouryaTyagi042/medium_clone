import { FullBlog } from "../components/FullBlog"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"

export const Blog = () => {
    const { id } = useParams()
    const { loading, blog } = useBlog({ id: id as string })

    if (loading) {
        return <div>
            <div>
                Loading...
            </div>
        </div>
    }
    return (
        <div>{
            blog === undefined ? <div>Blog not found</div> : <FullBlog blog={blog} />}
        </div>
    )
}