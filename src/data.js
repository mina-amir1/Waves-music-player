import {v4 as uuidv4} from'uuid';

const chillHop =()=>{

    return([
        {
            audio : "https://mp3.chillhop.com/serve.php/?mp3=28878",
            name: "In My Head",
            artist: "Misha",
            id: uuidv4(),
            color: ["#303A67","#CD1440"],
            cover: "https://chillhop.com/wp-content/uploads/2022/01/6881c7456483ab8ea364152a594942a20669a058-1024x1024.jpg",
            active: false
        },
        {
            audio : "https://mp3.chillhop.com/serve.php/?mp3=30134",
            name: "Rewind",
            artist: "SwuM, afternoon bike ride",
            id: uuidv4(),
            color: ["#3F5C69","#132937"],
            cover: "https://chillhop.com/wp-content/uploads/2021/12/b3079408b79f0ceed3189d6eb804b448fa0c4068-1024x1024.jpg",
            active: true
        },
        {
            audio : "https://mp3.chillhop.com/serve.php/?mp3=27500",
            name: "Soulsounds",
            artist: "Parkbench Epiphany",
            id: uuidv4(),
            color: ["#435159","#AD9191"],
            cover: "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
            active: false
        },
    ]);
}

export default chillHop;
