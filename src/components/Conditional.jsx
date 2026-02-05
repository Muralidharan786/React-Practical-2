function Conditional({isLoggedIn}) {
    return (
        <div>
            {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Log in</h1>}
        </div>
    );
}
//     if(isLoggedIn) {
//         return <h1>Welcome Back!</h1>;
//     } else {
//         return <h1>Please Log In</h1>;
//     }
// }

export default Conditional;