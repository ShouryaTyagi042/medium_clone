interface BlogProps {
    title: string;
    content: string;
    authorName: string;
    publishDate: string;
}
export const BlogCard = ({ title, content, authorName, publishDate }: BlogProps) => {
    return (<div className="border-b border-slate-300 pb-4 pl-3 pt-2">
        <div className="flex">
            <div className="flex justify-center flex-col">
                <Avatar name={authorName} />
            </div>
            <div className="font-extralight pl-2 pt-1">
                {authorName}
            </div >
            <div className="pl-2 font-thin text-slate-400 pt-1">
                {publishDate}
            </div>
        </div>
        <div className="text-xl font-bold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-sm font-thin pt-3">
            {`${Math.ceil(content.length / 100)} minute read`}
        </div>
        <div className="border-b4 border-black"></div>
    </div>
    );
}


function Avatar({ name }: { name: string }) {
    return (
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>
    )
}