function City(props){
    return(
        <>
        <div className="h-[50vh] space-y-5 w-[50vh] bg-[#FFFFFF1A]  text-white border-[#FFFFFF33] border-4 rounded-md items-center justify-center flex flex-col">

        <p className=" text-8xl">{props.emoji}</p>

        <p className="text-6xl">{props.country}</p>
        <p className="text-3xl">{props.temp}</p>

        </div>
        </>
    );
}

export default City