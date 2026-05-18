const UserProp = (Props) => {
    return (
        <div>
            <h1>User Details</h1>
            <div>
                <h2>{Props.name}</h2>
                <h2>{Props.age}</h2>
                {Props.age > 18 ? <h3>Young</h3> : <h3>Not Young</h3>}
            </div>
        </div>
    )
}
export default UserProp;