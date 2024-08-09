/* eslint-disable react/prop-types */
export default function UserRow(props) {
    return <>
        <div className="border-white border-2 w-full h-[300px] rounded-lg flex flex-col">
            <h1 className="text-white text-4xl pl-5 pt-3">Welcome, <strong>{props.username}</strong></h1>
        </div>
    </>
}