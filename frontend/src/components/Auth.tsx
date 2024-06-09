import { Link } from "react-router-dom"
import { useState } from "react"
import { SignupType } from "@shourya_042/common-app"

export const Auth = ({ type }: { type: "signin" | "signup" }) => {
    const [postInputs, setpostInputs] = useState<SignupType>({
        name: "",
        email: "",
        password: "",
    })
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="flex flex-col">
                <div className="flex flex-col px-5 py-5">
                    {/* {JSON.stringify(postInputs)} */}
                    <div className="text-3xl font-extrabold text-center" >
                        {type === "signin" ? "Login to existing account" : "Create an Account"}
                    </div>
                    <div className="text-slate-400 text-center">
                        {type === "signin" ? "Create a new account" : "Already have an account?"} <Link to={type === "signin" ? "/signup" : "/signin"} className="text-blue-500">{type === "signin" ? "Sign up" : "Sign in"}</Link>
                    </div>
                </div>
                <LabelledInput label="Name" placeholder="Name" onChange={(e) => setpostInputs({ ...postInputs, name: e.target.value })} />
                <LabelledInput label="Email" placeholder="Email" onChange={(e) => setpostInputs({ ...postInputs, email: e.target.value })} />
                <LabelledInput label="Password" type={"password"} placeholder="Password" onChange={(e) => setpostInputs({ ...postInputs, password: e.target.value })} />
                <div className="flex justify-center mt-4">
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">{type === "signin" ? "Sign in" : "Sign up"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputProps {
    label: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
}


function LabelledInput({ label, placeholder, onChange, type }: LabelledInputProps) {
    return <div>
        <label className="block mb-2 text-sm font-bold text-gray-900  ">{label}</label>
        <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2" placeholder={placeholder} required />
    </div>
}