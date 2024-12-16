export default function DownlaodButtonCV() {
    return (
        <div className="flex justify-evenly mt-4">
            <a 
                href="/thiago-souza-CV.pdf" 
                download 
                className="bg-yellow-600 font-bold text-gray-950 p-2 rounded-md hover:bg-yellow-700 transition"
            >
                Download CV PT-BR
            </a>
            <a 
                href="/thiago-souza-us-CV.pdf" 
                download 
                className="bg-yellow-600 font-bold text-gray-950 p-2 rounded-md hover:bg-yellow-700 transition"
            >
                Download CV EN
            </a>
        </div>
        
    )
}