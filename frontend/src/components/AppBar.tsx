import { Avatar } from "./BlogCard"
export const AppBar = () => {
    return <div className="border-b  flex justify-between px-10 py-2">
        <div className="flex flex-col justify-center">
            Medium
        </div>
        <div>
            <Avatar name="Shourya" />
        </div>

    </div>
} 