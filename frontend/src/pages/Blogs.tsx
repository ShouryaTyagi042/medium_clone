import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs()
    if (loading) {
        return <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="justify-center max-w-xl">
                    <div className="text-3xl font-bold pt-10">
                        Loading...
                    </div>
                </div>
            </div>
        </div>
    }
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="justify-center">
                {blogs.map((blog: any) => {
                    return <BlogCard
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        content={blog.content}
                        authorName={blog.author.name || "Anonymous"}
                        publishDate={"14th Mar 2024"}
                    />
                })}
            </div>
        </div>
    </div>
}