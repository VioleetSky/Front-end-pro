//Displaying data
const user={
    name: 'John Doe',
    imageUrl: 'https://picsum.photos/100',
    imageSize:100
};
export default function DisplayData(){
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of'+user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}

            />
        </>
    )
}