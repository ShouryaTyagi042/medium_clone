import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

export interface Blog {
    "id": string,
    "title": string,
    "content": string
    "author": {
        "name": string
    }
}

export const useBlog = (id: { id: string }) => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()
    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id.id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })

                setBlog(response.data.post)
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        fetchBlog()
    }, [])

    return { loading, blog }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        async function fetchBlogs() {
            try {
                console.log(localStorage.getItem("token"))
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
                setBlogs(response.data.posts)
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        fetchBlogs()
    }, [])

    return { loading, blogs }
}