const Home = () => {
    return (
        <div className="relative w-full h-full">

            <p className="relative text-3xl w-full text-center py-10 font-black">WELCOME</p>
            <h1 className="relative w-full text-center text-9xl font-bold" style={{
                background: 'linear-gradient(45deg, #ff8a00, #9d50bb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
            }}>Home</h1>
            <p className="relative text-2xl w-full text-center py-10 ">Feel Free To Navigate</p>
        </div>
    )
}

export default Home
