const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

console.log(WEATHER_API_KEY)

if(!WEATHER_API_KEY){
    throw new Error("not defined WEATHER_API_KEY IN .env file");
}

export default WEATHER_API_KEY
