const Intro = () => {
    return (
        <div className="flex flex-col items-center justify-center p-3">
            <p className="font-semibold text-4xl">Hi,I am Aaryansh</p>
            <p className="font-thin text-3xl p-2">developer and cinephile</p>
        </div>

    )
}

const Hero = () => {
    return (
        <div >
            <Intro />
            <img
                src="image1.jpg"
                alt="personlooking"
                className="max-h-[528px] drop-shadow overflow-hidden rounded-[10px] mx-auto my-auto"
            />
        </div>
    )
}

export default Hero

