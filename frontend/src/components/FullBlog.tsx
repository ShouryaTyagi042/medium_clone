import { AppBar } from "./AppBar"
import { Blog } from "../hooks"


export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-5">
                <div className="col-span-8 " >
                    <div className="text-3xl font-extrabold" >
                        {blog.title}
                    </div>
                    <div className="text-slate-400 pb-5">
                        Posted on 2nd March 2024
                    </div>
                    <div>
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 ">
                    Author
                    <div className="text-2xl">
                        {blog.author.name || "Anonymous"}
                    </div>
                </div>
            </div>
        </div>
    </div>
}