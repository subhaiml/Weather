function City(props){
    return(
        <>
        <div className="h-[70%] space-y-5 w-auto bg-[#FFFFFF1A]  text-white border border-[#FFFFFF33] rounded-md items-center justify-center flex flex-col">

        <p className=" text-8xl">{props.emoji}</p>

        <p className="text-6xl">{props.country}</p>
        <p className="text-3xl">{props.temp}</p>

        </div>
        </>
    );
}

export default City