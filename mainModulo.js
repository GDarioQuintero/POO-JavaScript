export class PlatziClases {
    constructor({
      name,
      videoID,
    }){
      this.name = name;
      this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }    

    pausar(){
        videoStop(this.videoID);
    }
  }

    function  videoPlay(id){
    const urlSectreta = "https://urlsecretisima" + id;
    console.log("Se esta reproduciendo el video " + urlSectreta);
  }

  function videoStop(id){
    const urlSectreta = "https://urlsecretisima" + id;
    console.log("Se esta Pausando el video "+ urlSectreta);
  }

  
  
  